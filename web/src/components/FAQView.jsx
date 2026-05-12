import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Card, Typography, Collapse } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Panel } = Collapse;

const FAQView = () => {
    const { t, language } = useLanguage();
    const { isDarkMode } = useTheme();

    const faqData = [
        {
            key: '1',
            question: language === 'th' ? 'ค่า PM2.5 เท่าไหร่ถึงจะอันตราย?' : 'What PM2.5 level is dangerous?',
            answer: language === 'th' ? (
                <>
                    <p>ตามเกณฑ์มาตรฐาน (TH AQI):</p>
                    <ul>
                        <li><Text strong style={{ color: '#FFC000' }}>สีส้ม (37.6 - 75.0 µg/m³):</Text> เริ่มมีผลกระทบต่อสุขภาพ ควรลดระยะเวลาการทำกิจกรรมกลางแจ้ง</li>
                        <li><Text strong style={{ color: '#F25F55' }}>สีแดง (75.1 µg/m³ ขึ้นไป):</Text> มีผลกระทบต่อสุขภาพ (อันตราย) ควรหลีกเลี่ยงกิจกรรมกลางแจ้งและสวมหน้ากากอนามัยป้องกันฝุ่น</li>
                    </ul>
                </>
            ) : (
                <>
                    <p>According to the standard (TH AQI):</p>
                    <ul>
                        <li><Text strong style={{ color: '#FFC000' }}>Orange (37.6 - 75.0 µg/m³):</Text> Unhealthy for sensitive groups. Reduce prolonged outdoor exertion.</li>
                        <li><Text strong style={{ color: '#F25F55' }}>Red (75.1 µg/m³ and above):</Text> Unhealthy (Hazardous). Avoid outdoor activities and wear a protective mask.</li>
                    </ul>
                </>
            )
        },
        {
            key: '2',
            question: language === 'th' ? 'ข้อมูลอัปเดตบ่อยแค่ไหน?' : 'How often is the data updated?',
            answer: language === 'th' ? 
                'ระบบจะดึงข้อมูลล่าสุดจากเซนเซอร์ผ่าน Google Sheets โดยอัตโนมัติ ทุกๆ 2 นาที (คุณสามารถปรับเปลี่ยนรอบการอัปเดตได้ที่เมนูตั้งค่า)' : 
                'The system automatically fetches the latest data from the sensors via Google Sheets every 2 minutes. (You can adjust the refresh interval in the Settings menu).'
        },
        {
            key: '3',
            question: language === 'th' ? 'ทำไมโปรเจกต์ SUT Air Quality ถึงมีความสำคัญ?' : 'Why is the SUT Air Quality project important?',
            answer: language === 'th' ? 
                'เนื่องจากปัจจุบันภายในพื้นที่มหาวิทยาลัยยังไม่มีการติดตั้งจุดตรวจวัดค่าฝุ่น PM2.5 และดัชนีคุณภาพอากาศอื่น ๆ อย่างเป็นระบบและจริงจัง โปรเจกต์นี้จึงเกิดขึ้นเพื่อสร้างระบบเครือข่ายเซนเซอร์ตรวจวัดแบบ Real-time โดยนักศึกษา เพื่อให้ทุกคนในมหาวิทยาลัยสามารถเข้าถึงข้อมูลสภาพอากาศที่แม่นยำในแต่ละพื้นที่ เช่น อาคารเรียนรวม 1 หรืออาคารบรรณสาร ได้ทันที เพื่อความปลอดภัยต่อสุขภาพของทุกคนครับ' : 
                'Currently, there is no systematic and serious installation of PM2.5 and other air quality index monitoring points within the university area. This project was created by students to build a real-time sensor network so that everyone in the university can instantly access accurate weather data in specific areas, such as Learning Building 1 or the Library, for the health and safety of everyone.'
        },
        {
            key: '4',
            question: language === 'th' ? 'อุปกรณ์ที่ใช้ในการตรวจวัดคืออะไร?' : 'What equipment is used for measurement?',
            answer: language === 'th' ? 
                'ระบบนี้ใช้ไมโครคอนโทรลเลอร์บอร์ด ESP32 ทำงานร่วมกับเซนเซอร์วัดฝุ่นละอองความแม่นยำสูง PMS5003 (วัดค่า PM2.5 และ PM10) และเซนเซอร์วัดอุณหภูมิและความชื้น DHT22 เพื่อให้ได้ข้อมูลสภาพอากาศที่ครบถ้วนและเชื่อถือได้' : 
                'The system uses an ESP32 microcontroller board paired with a high-precision PMS5003 dust sensor (measuring PM2.5 and PM10) and a DHT22 temperature and humidity sensor to provide comprehensive and reliable weather data.'
        }
    ];

    const panelStyle = {
        marginBottom: 12, 
        background: isDarkMode ? '#1f1f1f' : '#fafafa', 
        borderRadius: '10px', 
        border: isDarkMode ? '1px solid #303030' : '1px solid #f0f0f0',
        overflow: 'hidden'
    };

    const textStyle = {
        fontFamily: 'Kanit, sans-serif', 
        fontSize: '15px', 
        color: isDarkMode ? '#d9d9d9' : '#595959'
    };

    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <QuestionCircleOutlined style={{ fontSize: '48px', color: '#f97316', marginBottom: '10px' }} />
                <Title level={2} style={{ fontFamily: 'Kanit, sans-serif', marginTop: 0 }}>
                    {language === 'th' ? 'คำถามที่พบบ่อย (FAQ)' : 'Frequently Asked Questions'}
                </Title>
                <Text type="secondary" style={{ fontFamily: 'Kanit, sans-serif' }}>
                    {language === 'th' ? 'ข้อสงสัยเกี่ยวกับการใช้งาน SUT Air Dashboard' : 'Common questions about SUT Air Dashboard'}
                </Text>
            </div>

            <Collapse 
                accordion 
                defaultActiveKey={['1']} 
                bordered={false} 
                style={{ background: 'transparent' }}
                expandIcon={({ isActive }) => <QuestionCircleOutlined rotate={isActive ? 90 : 0} style={{ color: '#f97316' }} />}
            >
                {faqData.map(item => (
                    <Panel 
                        header={<Text strong style={{ fontFamily: 'Kanit, sans-serif', fontSize: '16px' }}>{item.question}</Text>} 
                        key={item.key}
                        style={panelStyle}
                    >
                        <div style={textStyle}>
                            {item.answer}
                        </div>
                    </Panel>
                ))}
            </Collapse>
        </div>
    );
};

export default FAQView;
