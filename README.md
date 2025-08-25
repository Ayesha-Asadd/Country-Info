# 🌍 Country Info Service

![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E?style=for-the-badge\&logo=javascript)
![CSS3](https://img.shields.io/badge/Styled%20with-CSS3-264de4?style=for-the-badge\&logo=css3\&logoColor=white)
![HTML5](https://img.shields.io/badge/Powered%20by-HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

✨ A **modern country info web app** built with **JavaScript, HTML, and CSS**, powered by a **SOAP Web Service API**. Instantly discover a country’s **ISO Code, Capital City, Currency, and National Flag** in a beautifully designed interface.

---

## 🚀 Live Demo

🔗 [https://ayesha-asadd.github.io/Country-Info/](#) 

---

## 🎨 Features

* 🔎 **Search any country** worldwide
* 🏛️ Instantly get its **capital city**
* 💰 Retrieve **currency name and code**
* 🚩 Display the official **country flag**
* ⚡ Built with **vanilla JavaScript + SOAP API**
* 📱 **Responsive & clean design** with animations

---

## 🖼️ Preview

<img width="1394" height="828" alt="image" src="https://github.com/user-attachments/assets/64042723-97f9-42ba-8a69-7b0283c1e79b" />

---

## 🛠️ Tech Stack

| Technology                 | Purpose              |
| -------------------------- | -------------------- |
| **HTML5**                  | Page structure       |
| **CSS3**                   | Styling & animations |
| **JavaScript**             | Logic & API calls    |
| **SOAP API**               | Country Info Service |
| **CORS Proxy**             | API request handling |
| **Font Awesome**           | Icons                |
| **Google Fonts (Poppins)** | Typography           |

---

## 📂 Project Structure

```
📦 country-info-service
 ┣ 📜 index.html   → UI Layout
 ┣ 📜 script.js    → SOAP API Integration
 ┣ 📜 style.css    → Styling & Animations
 ┣ 📜 README.md    → Documentation
```

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/country-info-service.git
cd country-info-service
```

### 2️⃣ Open in Browser

Just open `index.html` in your browser.

### 3️⃣ Search for Any Country

Example search for **Pakistan**:

* Country: **Pakistan (PK)**
* Capital: **Islamabad**
* Currency: **Pakistani Rupee (PKR)**
* Flag: 🇵🇰

---

## 📡 How It Works

This app communicates with the **Country Info SOAP Web Service** using JavaScript’s `fetch` API.

It sends SOAP requests wrapped in XML to fetch:

* `CountryISOCode` → ISO Code
* `CapitalCity` → Capital city
* `CountryCurrency` → Currency name & code
* `CountryFlag` → Flag image

The results are parsed with `DOMParser` and displayed in a **responsive UI**.

---

## 🤝 Contributing

Contributions are welcome! 🚀

* Fork this repository
* Create a new branch (`feature-xyz`)
* Commit your changes
* Submit a Pull Request

---

## 📜 License

Licensed under the **MIT License** – free to use, modify, and distribute.

