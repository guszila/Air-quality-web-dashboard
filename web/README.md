# WebApp AirQuality Mapping

แอปพลิเคชันเว็บสำหรับแสดงแผนที่และข้อมูลคุณภาพอากาศ (Air Quality) พัฒนาด้วย React และ Vite

## สิ่งที่ต้องมีก่อนติดตั้ง (Prerequisites)

- [Node.js](https://nodejs.org/) (แนะนำเวอร์ชัน 18 ขึ้นไป)
- npm (มาพร้อมกับ Node.js) หรือ yarn

## วิธีการติดตั้งและรันโปรเจกต์ (Installation & Running)

1. **เข้าไปยังโฟลเดอร์ของโปรเจกต์:**
   เปิด Terminal หรือ Command Prompt แล้วเข้าไปยังโฟลเดอร์โปรเจกต์ (`web`)
   ```bash
   cd d:\Desktop\FocusPanudetFolder\Y3_2_2568\Project_AirQuality\webApp_AirQuality_Mapping\web
   ```

2. **ติดตั้ง Dependencies ทั้งหมด:**
   รันคำสั่งด้านล่างเพื่อติดตั้งแพ็กเกจที่จำเป็นทั้งหมด
   ```bash
   npm install
   ```

3. **รัน Development Server เพื่อทดสอบ:**
   ```bash
   npm run dev
   ```

4. **เปิดใช้งานบนเบราว์เซอร์:**
   เมื่อรันคำสั่งเสร็จแล้ว Terminal จะแสดง URL (ปกติจะเป็น `http://localhost:5173`) ให้คลิกหรือคัดลอก URL ไปเปิดในเว็บเบราว์เซอร์เพื่อใช้งานแอปพลิเคชัน

## คำสั่งอื่นๆ (Available Scripts)

- `npm run build` - สำหรับสร้างไฟล์ Production เพื่อนำไป Deploy (ไฟล์จะถูกสร้างในโฟลเดอร์ `dist`)
- `npm run preview` - สำหรับดูตัวอย่างแอปพลิเคชันเวอร์ชัน Production ที่ผ่านการ Build แล้ว
- `npm run lint` - สำหรับตรวจสอบรูปแบบและความถูกต้องของโค้ดด้วย ESLint

## เทคโนโลยีหลักที่ใช้ในโปรเจกต์ (Tech Stack)

- **React (v18)** - Frontend Framework
- **Vite** - Build Tool
- **Ant Design** - UI Components
- **React-Leaflet / Leaflet** - สำหรับการแสดงผลแผนที่
- **Recharts** - สำหรับการแสดงผลกราฟและสถิติ
- **Axios** - สำหรับการดึงข้อมูลจาก API
