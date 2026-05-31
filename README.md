# 🌍 SUT AIR DASHBOARD

> **เว็บไซต์:** [https://sut-air-pollution.vercel.app/](https://sut-air-pollution.vercel.app/)

---

### ฟีเจอร์หลัก (Key Features)
* **การติดตามผลแบบเรียลไทม์ (Real-time Monitoring):** ดึงข้อมูลสดจากเซนเซอร์ IoT มาแสดงผลทันที
* **แผนที่ความร้อนเชิงโต้ตอบ (Interactive Heatmap):** แสดงความเข้มข้นของมลพิษด้วยสีสันบนแผนที่ (Geospatial Visualization)
* **ข้อมูลเชิงพื้นที่อัจฉริยะ (Location Intelligence):** ตรวจสอบคุณภาพอากาศตามพิกัดที่ผู้ใช้งานอยู่ผ่านระบบแผนที่อัจฉริยะ
* **การวิเคราะห์ข้อมูลย้อนหลัง (Historical Analysis):** มีกราฟแสดงแนวโน้มของคุณภาพอากาศย้อนหลัง

### เทคโนโลยีที่ใช้ (Tech Stack)
* **ฮาร์ดแวร์ (Hardware):** ESP32, PMS5003, DHT22, SD Card Module, RTC
* **ฟรอนต์เอนด์ (Frontend):** React.js
* **แบ็กเอนด์และระบบคลาวด์ (Backend & Cloud):** Google Sheets, JavaScript, C++
* **การเชื่อมต่อระบบ (Integration / API):** LINE Messaging API (LINE Official Account)

### ไลบรารีและเครื่องมือที่ใช้ (Libraries & Dependencies)
ระบบแสดงผล (Frontend) ขับเคลื่อนด้วยไลบรารีที่ทันสมัย ดังนี้:
* **`react` & `react-dom`:** ไลบรารีหลักสำหรับสร้าง User Interface ทั้งหมดของระบบ
* **`antd` (Ant Design):** ใช้จัดการโครงสร้าง Layout, ปุ่ม, เมนู, ไอคอน และหน้าต่าง Pop-up ต่าง ๆ ให้สวยงาม
* **`axios`:** ใช้สำหรับทำ HTTP Request เพื่อดึงข้อมูลคุณภาพอากาศจาก Google Sheets มาประมวลผล
* **`leaflet` & `react-leaflet`:** ใช้สำหรับวาดแผนที่และปักหมุดจุดติดตั้งเซนเซอร์ (Heatmap/Geospatial Visualization)
* **`recharts`:** ใช้สำหรับวาดกราฟแสดงแนวโน้มคุณภาพอากาศย้อนหลัง และกราฟแท่งเปรียบเทียบข้อมูล
* **`vite`:** ใช้เป็น Development Server และ Build Tool สำหรับประมวลผลโปรเจกต์ให้รวดเร็ว

---

### ระบบทำงานอย่างไร (How it Works)

1. **การตรวจวัด (Sensing):** เซนเซอร์ IoT (PMS5003, DHT22) ทำการเก็บรวบรวมข้อมูลคุณภาพอากาศและสภาพแวดล้อมผ่านบอร์ดไมโครคอนโทรลเลอร์ ESP32
2. **การส่งข้อมูล (Transmission):** ข้อมูลถูกส่งขึ้นสู่ระบบคลาวด์โดยใช้โปรโตคอล MQTT หรือ HTTP
3. **การประมวลผลและการจัดเก็บ (Processing & Storage):** ระบบใช้ Google Apps Script ในการประมวลผลข้อมูลที่รับเข้ามา และจัดเก็บลงใน Google Sheets เพื่อทำหน้าที่เป็นฐานข้อมูลขนาดเล็ก (Lightweight database)
4. **การตรวจสอบและวิเคราะห์เกณฑ์ (Monitoring & Threshold Analysis):** ระบบจะประเมินค่าฝุ่น PM เทียบกับเกณฑ์มาตรฐานความปลอดภัยที่กำหนดไว้อย่างต่อเนื่อง
5. **ระบบแจ้งเตือน (Notification System):** เมื่อระดับมลพิษเกินค่ามาตรฐานความปลอดภัยที่ตั้งไว้ ระบบจะสั่งการ LINE Messaging API โดยอัตโนมัติ เพื่อส่งการแจ้งเตือนแบบเรียลไทม์ไปยังผู้ใช้งานที่ติดตามผ่าน LINE Official Account
6. **การแสดงผล (Visualization):** เว็บแอปพลิเคชันที่พัฒนาด้วย React.js จะดึงข้อมูลล่าสุดมาแสดงผลในรูปแบบ:
   * แผนที่ความร้อนเชิงพื้นที่แบบอินเทอร์แอกทีฟ
   * ข้อมูลเชิงลึกด้านคุณภาพอากาศตามพิกัดสถานที่
   * กราฟแสดงแนวโน้มข้อมูลย้อนหลังเพื่อการวิเคราะห์เพิ่มเติม
  
## สิ่งที่ต้องมีก่อนติดตั้ง (Prerequisites)

- [Node.js](https://nodejs.org/) (แนะนำเวอร์ชัน 18 ขึ้นไป)
- npm (มาพร้อมกับ Node.js) หรือ yarn

## วิธีการติดตั้งและรันโปรเจกต์ (Installation & Running)

1. **โคลนโปรเจกต์จาก Git:**
  เปิด Terminal หรือ Command Prompt แล้วรันคำสั่งด้านล่างเพื่อดาวน์โหลดซอร์สโค้ด
   ```bash
   git clone https://github.com/guszila/Air-quality-web-dashboard.git
   ```
> [!TIP]
  > (สามารถเลือกที่เก็บไฟล์ที่ได้จากการโคลน Repo ได้เลยครับ)

2. **เข้าไปยังโฟลเดอร์ของโปรเจกต์:**
   ย้ายเข้าไปยังโฟลเดอร์ (`web`) ของโปรเจกต์ที่เพิ่งโคลนมา
   ```bash
   cd Air-quality-web-dashboard/web
   ```
> [!TIP]
  > (โดยวิธีเข้า (`cd`) /ตามด้วย Path ที่ตั้งของ Repo ที่เลือกไว้และตามด้วย (`Air-quality-web-dashboard/web`))

3. **ติดตั้ง Dependencies ทั้งหมด:**
   รันคำสั่งด้านล่างเพื่อติดตั้งแพ็กเกจที่จำเป็นทั้งหมด
   ```bash
   npm install
   ```

4. **รัน Development Server เพื่อทดสอบ:**
   ```bash
   npm run dev
   ```

5. **เปิดใช้งานบนเบราว์เซอร์:**
   เมื่อรันคำสั่งเสร็จแล้ว Terminal จะแสดง URL (ปกติจะเป็น `http://localhost:5173`) ให้คลิกหรือคัดลอก URL ไปเปิดในเว็บเบราว์เซอร์เพื่อใช้งานแอปพลิเคชัน

## คำสั่งอื่นๆ (Available Scripts)

- `npm run build` - สำหรับสร้างไฟล์ Production เพื่อนำไป Deploy (ไฟล์จะถูกสร้างในโฟลเดอร์ `dist`)
- `npm run preview` - สำหรับดูตัวอย่างแอปพลิเคชันเวอร์ชัน Production ที่ผ่านการ Build แล้ว
- `npm run lint` - สำหรับตรวจสอบรูปแบบและความถูกต้องของโค้ดด้วย ESLint
