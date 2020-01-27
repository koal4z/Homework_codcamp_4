### CodeCamp 4

- นายก้องภพ กล่ำคำ
- kkamkham@gmail.com

```
11.อ่าน React Documentation ในส่วน “Main Concepts” ข้อที่ 1-4 
1.Hello World
2.Introducing JSX
3.Rendering Elements
4.Components and Props
เขียนสรุปส่งเป็น readme.md Upload ผ่าน github
```

```
1. Hello World
แสดง ตัวอย่างที่เล็กที่สุดในการสร้าง react ให้แดสงในหน้า page
react คือ JS library 
```

```
2. Introducing JSX
React จะแยกก้อนใหญ่ของ markup และ logic เป็นชิ้นเล็กๆ ทีเรียกว่า components 
JSX ถูกนำมาใช้เพราะ ส่วนช่วยในด้านหน้าตาการเขียนทำให้แยกออกได้ง่าย และแสดงข้อผิดพลาดได้ง่ายขึ้น แต่แท้จริงไม่ได้จำเป็นในการ ใช้งาน react
การฝัง ตัวแปรหรือฟังก์ชันใน jsx จะได้ ปีกกาครอบ {}
ปกติจะแยก JSX เป็น หลายบรรทัดเพื่ออ่านง่าย และ แนะนำให้วงเล็บครอบเพื่อป้องกัน การแทรก semicolon 
และยังสามารถใช้ JSX ในใช้งานภายใน JS ได้อีก
ระวังในการใช้ attribute เพราะ JSX คล้าย JS มากกว่า ต้องใช้ camelcase และการใช้ close Tag

```

```
3.Rendering Elements
react element ที่ถูกจัดการภายใต้ reactDOM ต้องมี node root เดียว แต่ใน 1 app จะสร้างกี่ node ได้ตามต้องการ
react element ไม่เปลี่ยนรูป แสดงเพียง ui ในเวลาหนึ่ง
โดยการ update จากสถานะเก่า 
```

```
4.Components and Props
Component ช่วยแยก ส่วนของ UI นำกลับมาใช้ซ้ำ 
concept เดียวกับ JS function คือ รับค่าในชื่อ props และ คืน react elements บนหน้าจอ

Function and Class Components
funtion จะรับ props ที่เป็น object และ return React element
Class Components จะกล่าวในบทต่อไป
Rendering a Component สามารถตั้งโดย ผู้ใช้ จะส่ง ค่าผ่าน JSX attributes ในรุป object props 
Composing Components สามารถใช้ component ในการส่งค่า 
Extracting Components ควรแยก component ที่ถูกนำมาใช้ซ้ำบ่อยๆ
Props are Read-Only ไม่ว่าจะใช้ function หรือ class props ต้องไม่ถูกดัดแปลง 
```