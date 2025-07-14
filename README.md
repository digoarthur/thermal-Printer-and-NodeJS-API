# 🖨️ Order Receipt Printing via API

A simple system built with **Node.js** to send orders directly to **XPrinter XR - N160II thermal printers** over Wi-Fi. Ideal for restaurants such as sushi places, bars, and diners that want to automatically print orders placed through a local system.



 ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge)   ![XPrinter](https://img.shields.io/badge/XPrinter-Thermal-blue?style=for-the-badge)

---

## 🛠️ XPrinter XR-N160II Setup

<div align="center">




<img width="1280" height="640" alt="Group 110" src="https://github.com/user-attachments/assets/53c85468-44a9-4b12-a81f-132d25451e93" />


</div>

Follow the steps below to configure your printer to work over Wi-Fi, enabling communication via API.

### 📦 Step 1 – Connect via USB and open the software

**🖼️ Image here**  
Connect the printer to your computer via USB and open the **XPrinter V3.2C** software.  
If you don't have the software yet, download it here: [Download XPrinter 3.2C](https://www.xprintertech.com/download-center/)

---

### ⚙️ Step 2 – Configure the network




https://github.com/user-attachments/assets/0275a302-a618-497d-8d0c-f4443e865037







Go to **Advanced > SetNet** and fill in the fields as follows:

- **IP Address**: Desired IP for your printer (e.g. `192.168.1.200`)
- **Netmask**: `255.255.255.0`
- **Gateway**: `192.168.1.1`
- **SSID**: Your Wi-Fi network name
- **Key**: Your Wi-Fi password
- **Key Type**: `WPA2_AES_PSK`

Click **Set All**. The printer will beep 🔊🔊🔊 to confirm it received the settings.

---

### 🌐 Step 3 – Set up the connection



<img  alt="Português"  height="650" src="https://github.com/user-attachments/assets/f61fb44e-7cb2-4bdb-bfe5-fe2378f63b0c">

Return to the main screen and fill in the connection fields:

- **Local IP**: Your machine's local IPv4 (e.g. `192.168.1.105`)
- **Printer IP**: Same IP as configured above (`192.168.1.200`)
- Click **Connect** → “Connection Successful!” message will appear

---

### 🔌 Step 4 – Restart the printer


Turn the printer off and back on. It should beep 🔊🔊🔊 and connect automatically to your Wi-Fi network.

---






## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Thermal printer connected
- Network/USB access to printer


### Clone repository
```js
git clone https://github.com/DIGOARTHUR/Thermal-Printer-and-NodeJS-API.git
cd Thermal-Printer-and-NodeJS-API
```
### Install dependencies
```js
npm install

```

### run API

```js
node index.js

```

### Acesss API URL
```js
http://localhost:3000/imprimir
```

### Print output in XPrinter



https://github.com/user-attachments/assets/eade2199-d424-4e50-b6e9-e0cb312767bf



<br> 

---

<br>  


**Love Thermal-Printer-and-NodeJS-API tutorial? Give our repo a star ⭐ [⬆️](https://github.com/DIGOARTHUR/Thermal-Printer-and-NodeJS-API) .**

`by`: [@digoarthur](https://www.linkedin.com/in/digoarthur/) <a href="https://youtu.be/dQw4w9WgXcQ?si=VBzREBlncKuPTYBs"> <img src="https://github.com/user-attachments/assets/f45f0115-761e-4207-a9d9-dddacfb5b96b" alt="Brazil Flag" width="20" /> </a> 
