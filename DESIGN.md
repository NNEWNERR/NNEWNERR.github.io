---
name: Supakorn Portfolio
description: Automation QA portfolio — the Lab Notebook, where every number has a source.
colors:
  passing-green: "#1f7a4d"
  passing-green-dark: "#4fc386"
  passing-tint: "#e3f1e9"
  passing-tint-dark: "#183326"
  lab-paper: "#f7f7f4"
  lab-paper-dark: "#121413"
  clean-sheet: "#ffffff"
  clean-sheet-dark: "#1a1d1b"
  ink: "#1b1d1c"
  ink-dark: "#e8ebe9"
  pencil-gray: "#5b625f"
  pencil-gray-dark: "#9aa39f"
  ruled-line: "#e2e4df"
  ruled-line-dark: "#2a2f2c"
  caution-amber: "#9a5b00"
  caution-amber-dark: "#e0a64b"
  failing-red: "#c43c3c"
  failing-red-dark: "#ef7b7b"
typography:
  display:
    fontFamily: "IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "clamp(34px, 6vw, 56px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "clamp(26px, 3.4vw, 34px)"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.5
  code:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.88em"
    fontWeight: 400
rounded:
  code: "5px"
  tag: "6px"
  chip: "8px"
  card: "14px"
  pill: "999px"
spacing:
  gutter: "20px"
  chip-gap: "8px"
  card-gap: "18px"
  card-padding: "26px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.passing-green}"
    textColor: "{colors.clean-sheet}"
    rounded: "{rounded.pill}"
    padding: "11px 20px"
    typography: "{typography.label}"
  button-secondary:
    backgroundColor: "{colors.clean-sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "11px 20px"
  badge-public:
    backgroundColor: "{colors.passing-tint}"
    textColor: "{colors.passing-green}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
    typography: "{typography.label}"
  tag:
    backgroundColor: "{colors.clean-sheet}"
    textColor: "{colors.pencil-gray}"
    rounded: "{rounded.tag}"
    padding: "2px 8px"
    typography: "{typography.label}"
  card:
    backgroundColor: "{colors.clean-sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-padding}"
---

# Design System: Supakorn Portfolio

## Overview

**Creative North Star: "The Lab Notebook"**

เว็บนี้คือสมุดบันทึกการทดลองของ QA คนหนึ่ง: ทุกหน้าเขียนเหมือนบันทึกที่คนอื่นเปิดตรวจได้ ตัวเลขมีที่มา ผลที่ล้มเหลวถูกจดไว้ข้างผลที่สำเร็จ และไม่มีอะไรถูกตกแต่งให้ดูดีเกินหลักฐาน ระบบดีไซน์จึงเงียบโดยตั้งใจ: กระดาษอุ่น หมึกเข้ม เส้นบรรทัดบาง และสีเขียวเพียงสีเดียวที่ปรากฏเมื่อมีบางอย่าง "ผ่านการยืนยันแล้ว"

ความหนาแน่นอยู่ระดับกลาง อ่านสบายบนมือถือที่ recruiter เปิดจากเรซูเม่ และละเอียดพอให้คนสายเทคนิคไล่อ่านได้ component ทุกตัวสุภาพและถอยให้เนื้อหา: ไม่มีเงา ไม่มีไล่สี ไม่มีการเคลื่อนไหวที่ไม่ได้สื่อสถานะ ความลึกเกิดจากเส้น 1px กับพื้นผิวสองระดับเท่านั้น

สิ่งที่ปฏิเสธแล้ว (ยืนยันจากการ polish ด้วย Impeccable 2026-10-16): ป้าย eyebrow เหนือหัวข้อ, แถวตัวเลขใหญ่แบบ hero-metric, card ขนาดเท่ากันเป็นโครงหลักของหน้า, เส้นสีหนาด้านข้าง, emoji แทนไอคอน, monospace เพื่อให้ดู "เทคนิค"

**Key Characteristics:**
- สีเน้นสีเดียว (Passing Green) ใช้กับสิ่งที่ยืนยันแล้วหรือ action หลักเท่านั้น
- แบนทั้งระบบ ความลึกมาจากเส้นบรรทัดและพื้นผิว ไม่ใช่เงา
- ตัวอักษรตระกูลเดียว (IBM Plex Sans Thai) ลำดับชั้นมาจากขนาดและน้ำหนัก
- ตัวเลขเป็นพระเอก: tabular, ตัวหนา, มีบรรทัดบอกที่มาอยู่ใกล้ๆ เสมอ
- โหมดมืดเป็นชุด token เต็ม ไม่ใช่การกลับสี

## Colors

กระดาษอุ่นกับหมึกเข้ม บวกสีเขียวหนึ่งสีที่มีความหมายเฉพาะ และสีสถานะอีกสองสีที่ใช้เมื่อจำเป็นเท่านั้น

### Primary
- **Passing Green**: สีของ "ผ่านการยืนยันแล้ว" ใช้กับ action หลัก (ปุ่ม primary, ลิงก์), จุดสถานะ CI ที่ผ่าน, บรรทัดตำแหน่งใต้ชื่อ และ focus ring โหมดมืดใช้ Passing Green Dark ที่สว่างขึ้นเพื่อ contrast
- **Passing Tint**: พื้นของ badge public และ inline code — สีเขียวจางที่บอกว่าเป็น "ของจริง ตรวจได้" โดยไม่ตะโกน

### Neutral
- **Lab Paper**: พื้นหลังของทั้งหน้า ขาวอมเทาอุ่น ไม่ขาวจ้า
- **Clean Sheet**: พื้นผิวยกขึ้นหนึ่งระดับ (card, กล่องโค้ด, ตาราง) แยกจาก Lab Paper ด้วยค่าความสว่างเล็กน้อยบวกเส้น Ruled Line
- **Ink**: ตัวอักษรหลักและหัวข้อ
- **Pencil Gray**: ข้อความรอง คำอธิบาย ป้ายกำกับ เวลา "ล่าสุด X นาทีที่ผ่านมา"
- **Ruled Line**: เส้นแบ่ง ขอบ card ขอบตาราง เส้นใต้แถว case study — เส้นเดียวที่ระบบใช้สร้างความลึก

### Status (ใช้เฉพาะเมื่อสื่อสถานะ)
- **Caution Amber**: badge "private · ระบบลูกค้า" และ callout ที่ต้องระวัง
- **Failing Red**: CI ที่ล้ม และป้าย "ไม่ทำ" ในตัวอย่าง do/don't — ผ่าน AA ทั้งสองโหมด

### Named Rules
**The Passing Green Rule.** สีเขียวหมายถึง "ยืนยันแล้ว" หรือ "ทำสิ่งนี้" เท่านั้น ห้ามใช้เป็นสีตกแต่ง ถ้าสิ่งนั้นไม่ได้ผ่านการยืนยันหรือไม่ใช่ action ให้ใช้ Ink หรือ Pencil Gray

**The Status-Only Rule.** Amber และ Red ปรากฏเมื่อมีสถานะจริงให้สื่อ ไม่ใช่เพื่อเพิ่มสีสันให้หน้า

## Typography

**Display Font:** IBM Plex Sans Thai (with system-ui)
**Body Font:** IBM Plex Sans Thai (with system-ui)
**Label/Mono Font:** IBM Plex Mono — เฉพาะโค้ด คำสั่ง และชื่อไฟล์

**Character:** ตระกูลเดียวที่อ่านภาษาไทยและอังกฤษปนกันได้ราบรื่น ดูเป็นงานวิศวกรรมแต่ไม่แข็ง ลำดับชั้นทั้งหมดมาจากขนาดกับน้ำหนัก ไม่ใช่การเปลี่ยนฟอนต์

### Hierarchy
- **Display**: ชื่อบนหน้าแรกและหัวหน้า Docs เท่านั้น
- **Headline**: หัวข้อ section (ผลงาน, Case studies, แนวคิด, หัวข้อบทความใน Docs)
- **Title**: ชื่อโปรเจกต์ใน card และหัวข้อย่อย; แถว case study ใช้ขนาด 18px น้ำหนัก 600
- **Body**: เนื้อหาทั่วไป line-height 1.75 เพราะสระและวรรณยุกต์ไทยต้องการพื้นที่ บทความใน Docs คุมความกว้างที่ 720px
- **Label**: badge, tag, เวลาอัปเดต, ป้ายกำกับรอง
- **Code**: inline code บนพื้น Passing Tint, บล็อกโค้ดบน Clean Sheet

### Named Rules
**The Measured Number Rule.** ตัวเลขที่เป็นหลักฐาน (จำนวนเทส, passed/skipped) ใช้ `tabular-nums` ตัวหนา และต้องมีบรรทัดบอกที่มาอยู่ติดกัน ตัวเลขที่ไม่มีที่มาไม่ได้รับการเน้น

**The Code-Only Mono Rule.** monospace ใช้กับสิ่งที่พิมพ์ลง terminal หรือไฟล์ได้จริงเท่านั้น ไม่ใช้กับป้าย ชื่อ หรือรหัสอ้างอิงเพื่อให้ดูเทคนิค

## Layout

คอลัมน์เดียวกว้างสูงสุด 1040px ขอบข้าง 20px ทุกขนาดจอ section คั่นด้วยเส้น Ruled Line และระยะ 64px บนล่าง

- **หน้าแรก:** ชื่อ → ตำแหน่ง → แนะนำตัว → ข้อมูลสั้น → ปุ่ม → ประโยคหลักฐาน (ตัวเลขสด) แล้วจึงเป็นผลงาน; card โปรเจกต์ใช้ grid 2 คอลัมน์ ช่องว่าง 18px โปรเจกต์หลักกินเต็มแถว ใบสุดท้ายที่เหลือเดี่ยวก็กินเต็มแถว
- **Case studies:** รายการแบบสารบัญ ไม่ใช่ grid ของ card — แต่ละแถวมีชื่อ เทคนิค และรหัสชิดขวา
- **Docs:** สารบัญ sticky 240px ทางซ้าย + เนื้อหา; ต่ำกว่า 860px สารบัญกลายเป็นกล่องด้านบน
- **มือถือ:** ทุก grid ยุบเป็นคอลัมน์เดียวที่ 800px; ห้ามมี horizontal scroll ที่ 390px (ใช้ `minmax(0, 1fr)` กับ grid ที่มีโค้ด)

## Elevation & Depth

ระบบแบนทั้งหมด ไม่มี `box-shadow` แม้แต่ที่เดียว ความลึกมีสองระดับ: Lab Paper (พื้น) และ Clean Sheet (ยกขึ้น) แยกกันด้วยเส้น Ruled Line 1px ส่วน nav ใช้พื้นโปร่ง 88% กับ `backdrop-filter: blur(8px)` เพื่อให้เนื้อหาเลื่อนผ่านใต้ได้โดยยังอ่านเมนูออก — นี่คือเอฟเฟกต์เดียวที่ทำหน้าที่ ไม่ใช่การตกแต่ง

### Named Rules
**The Ruled-Line Rule.** ถ้าต้องแยกสองสิ่งออกจากกัน ใช้เส้น 1px หรือเปลี่ยนพื้นผิวหนึ่งระดับ ห้ามใช้เงา ห้ามใช้เส้นหนาด้านข้าง

## Shapes

มุมโค้งบอกขนาดของสิ่งนั้น: ยิ่งเล็กยิ่งโค้งน้อย ยกเว้นสิ่งที่กดได้หรือเป็นสถานะซึ่งเป็นแคปซูลเสมอ

- **แคปซูล:** ปุ่ม, badge
- **มุมใหญ่:** card และกล่องรายการ (threads, สารบัญบนมือถือ)
- **มุมกลาง:** chip ใน tech stack, กล่องโค้ด, ตาราง (10px)
- **มุมเล็ก:** tag ใต้ card, inline code
- **วงกลม:** จุดสถานะ 8px และจุด timeline 10px

## Components

ทุก component สุภาพ เรียบ และถอยให้เนื้อหา: ไม่มีเงา ไม่มีการเด้งตอน hover การตอบสนองคือการเปลี่ยนสีอย่างเดียว

### Buttons
- **Shape:** แคปซูล
- **Primary:** พื้น Passing Green ตัวอักษรขาว (โหมดมืดใช้ตัวอักษรเขียวเข้ม #0d1f15) ใช้หนึ่งปุ่มต่อกลุ่ม
- **Secondary:** พื้น Clean Sheet ขอบ Ruled Line ตัวอักษร Ink
- **Focus:** outline 2px Passing Green เว้นระยะ 3px

### Chips
- **Badge:** แคปซูล พื้น Passing Tint ตัวอักษร Passing Green สำหรับ "public"; ชุด Amber สำหรับ "private · ระบบลูกค้า"
- **Tag:** ขอบ Ruled Line ตัวอักษร Pencil Gray มุมเล็ก ใช้บอก stack ใต้ card

### Cards / Containers
- **Corner Style:** มุมใหญ่ (14px)
- **Background:** Clean Sheet บน Lab Paper
- **Shadow Strategy:** ไม่มี — ดู Elevation & Depth
- **Border:** Ruled Line 1px
- **Internal Padding:** 26px

### Navigation
- แถบบน sticky สูง 58px ชื่อตัวหนาทางซ้าย ลิงก์ Pencil Gray ทางขวา hover เป็น Ink หน้าปัจจุบันเป็น Ink ตัวหนา (`aria-current`) ต่ำกว่า 640px ซ่อนลิงก์เหลือแต่ชื่อ

### Live Status Line (signature)
บรรทัดเล็กใต้หัว card ที่บอกผล CI รอบล่าสุด: จุด 8px (เขียว = ผ่าน, แดง = มี failed, เทา = บันทึกมือ) + "CI ล่าสุด: N passed · M skipped · เวลา" + ลิงก์ "ดู run →" (ไม่มีลิงก์ถ้า repo เป็น private) จุดไม่กะพริบ

### Case Study Row (signature)
แถวในสารบัญ: ชื่อเคส (Title 18px) ด้านบน, เทคนิคหลัก (Pencil Gray) ด้านล่าง, รหัส CS-0N ชิดขวาแบบ tabular; hover เปลี่ยนสีชื่อเป็น Passing Green อย่างเดียว

## Do's and Don'ts

### Do:
- **Do** ใช้ Passing Green กับสิ่งที่ยืนยันแล้วหรือ action หลักเท่านั้น (The Passing Green Rule)
- **Do** แยกพื้นผิวด้วยเส้น Ruled Line 1px และ Clean Sheet บน Lab Paper
- **Do** ใส่บรรทัดบอกที่มาไว้ติดกับตัวเลขที่เป็นหลักฐานทุกตัว
- **Do** ใช้ token ทุกสีผ่าน CSS custom property และให้มีค่าคู่สำหรับโหมดมืดเสมอ
- **Do** ทดสอบที่ 390px ทุกครั้ง: ไม่มี horizontal scroll
- **Do** ใช้ `line-height` อย่างน้อย 1.5 กับข้อความไทย

### Don't:
- **Don't** ใส่ป้าย eyebrow หรือ kicker เหนือหัวข้อ และไม่ใส่เลขลำดับ 01/02 ถ้าลำดับไม่มีความหมาย
- **Don't** ใช้แถวตัวเลขใหญ่หลายช่องแบบ hero-metric — ตัวเลขอยู่ในประโยคที่มีบริบท
- **Don't** ใช้ `box-shadow`, gradient text หรือ glass เป็นการตกแต่ง
- **Don't** ใส่เส้นสีหนากว่า 1px ด้านข้าง card, callout หรือรายการ
- **Don't** ใช้ emoji แทนไอคอน
- **Don't** ใช้ monospace กับสิ่งที่ไม่ใช่โค้ด (The Code-Only Mono Rule)
- **Don't** ทำ animation ที่วนไม่หยุด (เช่นจุดกะพริบ) — การเคลื่อนไหวต้องตอบสนองต่อการกระทำเท่านั้น
