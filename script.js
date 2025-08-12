
    const SOAP_URL = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";
    const PROXY = "https://corsproxy.io/?";

    function soapEnvelope(body) {
      return `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>${body}</soap:Body>
      </soap:Envelope>`;
    }

    async function soapRequest(action, body) {
      const res = await fetch(PROXY + SOAP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/xml; charset=utf-8",
          "SOAPAction": action
        },
        body: soapEnvelope(body)
      });
      return new DOMParser().parseFromString(await res.text(), "text/xml");
    }

    async function getCountryInfo() {
      const name = document.getElementById("countryInput").value.trim();
      if (!name) return alert("Please enter a country name");

      const resultDiv = document.getElementById("result");
      resultDiv.style.display = "block";
      resultDiv.innerHTML = "Loading...";

      try {
        const isoDoc = await soapRequest("CountryISOCode",
          `<CountryISOCode xmlns="http://www.oorsprong.org/websamples.countryinfo">
            <sCountryName>${name}</sCountryName>
          </CountryISOCode>`
        );
        const iso = isoDoc.querySelector("CountryISOCodeResult")?.textContent;
        if (!iso) throw new Error("Country not found");

        const capDoc = await soapRequest("CapitalCity",
          `<CapitalCity xmlns="http://www.oorsprong.org/websamples.countryinfo">
            <sCountryISOCode>${iso}</sCountryISOCode>
          </CapitalCity>`
        );
        const capital = capDoc.querySelector("CapitalCityResult")?.textContent;

        const curDoc = await soapRequest("CountryCurrency",
          `<CountryCurrency xmlns="http://www.oorsprong.org/websamples.countryinfo">
            <sCountryISOCode>${iso}</sCountryISOCode>
          </CountryCurrency>`
        );
        const currencyName = curDoc.querySelector("sName")?.textContent;
        const currencyCode = curDoc.querySelector("sISOCode")?.textContent;

        const flagDoc = await soapRequest("CountryFlag",
          `<CountryFlag xmlns="http://www.oorsprong.org/websamples.countryinfo">
            <sCountryISOCode>${iso}</sCountryISOCode>
          </CountryFlag>`
        );
        const flagUrl = flagDoc.querySelector("CountryFlagResult")?.textContent;

        resultDiv.innerHTML = `
          <div class="info-line"><i class="fas fa-flag"></i><strong>Country:</strong> ${name} (${iso})</div>
          <div class="info-line"><i class="fas fa-landmark"></i><strong>Capital:</strong> ${capital}</div>
          <div class="info-line"><i class="fas fa-money-bill-wave"></i><strong>Currency:</strong> ${currencyName} (${currencyCode})</div>
          ${flagUrl ? `<img src="${flagUrl}" class="flag">` : ""}
        `;
      } catch (err) {
        resultDiv.innerHTML = `<span style="color:red;">Error: ${err.message}</span>`;
      }
    }
