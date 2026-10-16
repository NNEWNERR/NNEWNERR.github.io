# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

ยืนยันโดยเจ้าของ (2026-10-16) — สองกลุ่มหลัก:

1. **HR / Recruiter ไทย** — เปิดจากลิงก์ในเรซูเม่ระหว่างคัดกรองผู้สมัครหลายคน มีเวลาไม่กี่สิบวินาทีต่อคน งานของเขาคือตอบให้ได้ว่า "คนนี้เหมาะกับตำแหน่ง Automation QA ไหม และควรเรียกสัมภาษณ์หรือเปล่า" ไม่จำเป็นต้องเข้าใจศัพท์เทคนิคทุกคำ
2. **คนที่อยากเรียน QA / test automation** — เข้ามาที่หน้า Docs เพื่อเรียนเทคนิคจากตัวอย่างจริง ไม่ได้มาจ้างงาน อ่านช้า อ่านลึก และอาจกลับมาอ่านซ้ำ

ไม่ใช่กลุ่มหลัก (ตัดสินใจแล้ว): บริษัทต่างชาติ / remote ที่อ่านภาษาไทยไม่ได้

## Product Purpose

พอร์ตโฟลิโอของ ศุภากร เศวตวงศ์สกุล (นิว) — Automation QA Engineer (Playwright + TypeScript) ที่มองหาตำแหน่ง Automation QA และเติบโตสู่ SDET / QA Lead

เว็บสำเร็จเมื่อ:
- recruiter ออกจากหน้าแรกโดยรู้ว่าทำงานแบบไหน มีผลงานจริงขนาดไหน และติดต่อทางไหน
- คนที่มาเรียนได้เทคนิคที่เอาไปใช้ต่อได้จาก Docs
- เจ้าของใช้ส่วน Runbook ใน Docs ดูแลระบบตัวเลขสดได้เอง

## Positioning

**พิสูจน์ด้วยหลักฐาน ไม่ใช่คำอ้าง** (ยืนยันโดยเจ้าของ)

- ตัวเลขเทสบนเว็บดึงสดจาก CI ของแต่ละ repo ผ่าน Firestore — ไม่ได้พิมพ์ใส่เอง
- case study มาจากบั๊กจริงในระบบที่ใช้งานอยู่บน production ไม่ใช่เทสบน demo site
- บันทึกตามจริงแม้ผลไม่สวย เช่น ผลรอบแรกของ Playwright Test Agents ที่ generator สร้างเทส 31 ตัวแต่รันได้ 0, healer ที่ไม่ทำ `fixme` ตามกฎ, flake ที่บันทึกไว้แทนการกลบด้วย retry

## Operating Context

- recruiter มักเปิดบนมือถือหรือแท็บเล็ตจากไฟล์ PDF เรซูเม่หรือ LinkedIn/อีเมล
- ลิงก์ออกไปยัง GitHub (repo public 3 ตัว + profile `new.supakorn` ที่เก็บ case study)
- repo Krungthon Air เป็นระบบลูกค้า (private) — แสดงได้แค่ตัวเลขรวมและวิธีคิด
- เรซูเม่ (`D:\github\docs\resume\`) และ profile README ต้องใช้ตัวเลขชุดเดียวกับเว็บ (ปัจจุบัน 358)

## Capabilities and Constraints

- เว็บ static บน GitHub Pages (`index.html`, `docs/index.html`, `assets/site.css`) — ไม่มี build step
- ตัวเลขสด: Firestore project `supakorn-portfolio`, collection `suites` อ่านอย่างเดียวจากเบราว์เซอร์; ถ้าดึงไม่ได้ หน้าเว็บต้องยังแสดงตัวเลขที่เขียนไว้ในหน้า
- ตัวเลขรวมบนหน้าแรก = เทสที่มีใน repo (`inventory`); บรรทัด "CI ล่าสุด" = เทสที่รันจริง — ต้องแยกสองความหมายนี้ไว้เสมอ
- **ภาษาไทยอย่างเดียว** (ยืนยันโดยเจ้าของ) — ศัพท์เทคนิคคงเป็นภาษาอังกฤษตามที่ใช้จริงในวงการ
- ห้ามเปิดเผยข้อมูลลูกค้า, URL ภายใน, commit หรือลิงก์ run ของ repo private

## Brand Commitments

- ชื่อที่ใช้: ศุภากร เศวตวงศ์สกุล (นิว)
- ตำแหน่ง: Automation QA Engineer · Playwright + TypeScript
- ข้อความแนะนำตัวและเนื้อหาผลงานมาจาก profile README ใน `new.supakorn` — ถือเป็นสำนวนของเจ้าของ แก้ copy ต้องถามก่อน

## Evidence on Hand

- ตัวเลขเทสสดจาก CI: qa-automation, multitenant-booking-qa, sauce-demo-tests, Krungthon Air (E2E + rules)
- case study 8 เคส: `github.com/NNEWNERR/new.supakorn/tree/main/case-studies`
- repo public: `qa-automation`, `multitenant-booking-qa`, `sauce-demo-tests`
- เอกสารกลยุทธ์การทดสอบ: `sauce-demo-tests/TESTING.md`
- ผลรอบแรกของ Playwright Test Agents: README ของ `qa-automation` หัวข้อ "First run (2026-10-16)"
- รูปโปรไฟล์: `D:\github\docs\resume\resume-photo.png` (ยังไม่ได้ใช้บนเว็บ — ยังไม่ได้ตัดสินใจ)

**ไม่มี และห้ามสร้างขึ้นมาเอง:** testimonial / คำรับรองจากคนอื่น, โลโก้บริษัทลูกค้า, ตัวเลข impact ทางธุรกิจ (เช่น "ลดบั๊ก X%"), ใบรับรอง

## Product Principles

1. **ทุกตัวเลขต้องมีที่มาที่ตรวจได้** — ถ้าคนอ่านถามว่า "รู้ได้ยังไง" ต้องมีลิงก์หรือระบบตอบได้
2. **recruiter ต้องได้คำตอบก่อน คนเทคนิคได้ความลึกทีหลัง** — ภาพรวมก่อน รายละเอียดอยู่ห่างไปหนึ่งคลิก
3. **บอกตามจริงแม้ไม่สวย** — ข้อจำกัด, ผลที่ล้มเหลว และสิ่งที่ยังไม่ได้ทำ เป็นหลักฐานของวิธีคิด ไม่ใช่สิ่งที่ต้องซ่อน
4. **ความลับของลูกค้ามาก่อนความน่าประทับใจ** — โชว์วิธีคิดและตัวเลขรวมได้ แต่ไม่โชว์ข้อมูลหรือโค้ดของลูกค้า

## Accessibility & Inclusion

ยึด WCAG 2.2 AA — *อนุมานจากงาน a11y ที่เจ้าของโชว์ในพอร์ตและเรซูเม่ ยังไม่ได้ยืนยันเป็นข้อกำหนดโดยตรง*
