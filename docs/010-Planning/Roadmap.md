---
id: PLAN-001
type: roadmap
status: draft
project: manhtrongdanh
owner: "@tinnguyen"
created: 2026-02-28
---

# Roadmap — Manhtrongdanh Redesign

> Chuyển đổi từ portfolio KTS sang nhật ký cá nhân / blog gia đình

## Tổng Quan

| Thuộc tính | Giá trị |
|------------|---------|
| **Mục tiêu** | Rebrand trang web cá nhân → nhật ký viết cho gia đình |
| **Scope** | Content & branding changes (giữ layout + design system) |
| **Timeline** | 1 session (~30-60 phút) |
| **Deploy** | Vercel (đã liên kết) |

---

## Phase 1: Rebrand (MVP) — Ưu tiên cao

> Các thay đổi text/content, không đụng layout

| # | Task | Chi tiết |
|---|------|----------|
| 1.1 | Bỏ "— Architect" khỏi logo | Header: chỉ còn "MẠNH TRỌNG DANH" |
| 1.2 | Đổi nav "Projects" → tên mới | Phù hợp column 1 |
| 1.3 | Đổi nav "Contact" → "Đúc Kết" | Phù hợp column 4 |
| 1.4 | Đổi column 4 title | "Liên Hệ" → "Đúc Kết" |
| 1.5 | Thay contact form bằng nội dung mới | 2 cards giống 3 cột kia |
| 1.6 | Cập nhật SEO meta | Title, description, OG tags |
| 1.7 | Cập nhật footer | Bỏ "Architect" nếu có |

## Phase 2: Nội dung "Đúc Kết" — Ưu tiên cao

| # | Task | Chi tiết |
|---|------|----------|
| 2.1 | Thiết kế 2 cards cho cột "Đúc Kết" | Cùng style editorial với 3 cột kia |
| 2.2 | Generate 2 ảnh mới | AI generate phù hợp chủ đề "đúc kết" |
| 2.3 | Viết nội dung mô tả cards | Tiêu đề + mô tả ngắn |

## Phase 3: Polish & Deploy — Ưu tiên trung bình

| # | Task | Chi tiết |
|---|------|----------|
| 3.1 | Giữ social links ở vị trí nào đó | Di chuyển Instagram/LinkedIn/Email |
| 3.2 | Test responsive (mobile, tablet) | Đảm bảo 4 cột vẫn hoạt động |
| 3.3 | Deploy production | `vercel --prod` |

---

## Deliverables

- ✅ Trang web rebranded, không còn "Architect"
- ✅ Cột "Đúc Kết" thay thế contact form
- ✅ SEO meta cập nhật
- ✅ Deploy live trên Vercel
