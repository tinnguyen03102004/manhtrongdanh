---
id: PRD-001
type: prd
status: draft
project: manhtrongdanh
owner: "@tinnguyen"
created: 2026-02-28
linked-to: [[Roadmap]]
---

# PRD — Manhtrongdanh Website Redesign

## 1. Bối Cảnh

Trang <https://manhtrongdanh.vercel.app/> hiện là portfolio kiến trúc sư với layout 4 cột editorial. Khách yêu cầu chuyển đổi thành **nhật ký cá nhân** — nơi viết linh tinh cho con đọc sau này. Giữ nguyên design system (monochrome, editorial minimalism).

## 2. Mục Tiêu

| Mục tiêu | Đo lường |
|----------|---------|
| Rebrand khỏi "Architect" | Logo, meta, content không còn chữ "kiến trúc sư" |
| Thay cột 4 thành "Đúc Kết" | Contact form → 2 content cards |
| Giữ tính thẩm mỹ hiện tại | Layout, fonts, colors không đổi |
| Deploy live | Production URL hoạt động bình thường |

## 3. Phạm Vi Thay Đổi

### ✅ Trong Scope

| File | Thay đổi |
|------|----------|
| `index.html` | Bỏ "— Architect", đổi nav, đổi cột 4, cập nhật meta |
| `images/` | Thêm 2 ảnh mới cho cột "Đúc Kết" |
| `css/styles.css` | Không đổi (hoặc minor adjustments) |
| `js/main.js` | Bỏ logic contact form (không cần nữa) |

### ❌ Ngoài Scope

- Thay đổi layout grid 4 cột
- Thay đổi design system (fonts, colors)
- Thêm CMS/backend
- Thay đổi domain

## 4. Chi Tiết Thay Đổi

### 4.1 Header

```diff
- Mạnh Trọng Danh — Architect
+ Mạnh Trọng Danh
```

Nav links:

```diff
  Projects | About | Journal | Contact
+ Kiến Trúc | Cuộc Sống | Góc Nhìn | Đúc Kết
```

### 4.2 Cột 4: "Đúc Kết" (thay "Liên Hệ")

**Cấu trúc mới** — 2 cards giống 3 cột kia:

| Card | Tiêu đề gợi ý | Mô tả gợi ý |
|------|---------------|-------------|
| Card 1 | "Bài Học" | Những bài học cuộc sống đúc kết từ trải nghiệm — điều giản dị nhưng mất rất lâu để nhận ra. |
| Card 2 | "Lời Gửi" | Những dòng muốn ghi lại cho ngày mai — khi con lớn, khi thế giới đổi thay, khi ký ức phai nhạt. |

### 4.3 Social Links

Di chuyển social links (Instagram, LinkedIn, Email) vào **dưới cùng cột "Đúc Kết"** thay vì bỏ hẳn.

### 4.4 SEO Meta

```diff
- <title>Mạnh Trọng Danh - Architect</title>
+ <title>Mạnh Trọng Danh</title>

- <meta name="description" content="Kiến trúc sư với tầm nhìn sáng tạo...">
+ <meta name="description" content="Nhật ký cá nhân của Mạnh Trọng Danh — kiến trúc, cuộc sống, góc nhìn và những đúc kết gửi lại cho mai sau.">

- <meta name="keywords" content="kiến trúc, architect, ...">
+ <meta name="keywords" content="Mạnh Trọng Danh, nhật ký, blog cá nhân, đúc kết, cuộc sống">
```

### 4.5 Ảnh Mới

Generate 2 ảnh AI cho cột "Đúc Kết":

- **Ảnh 1 (Bài Học)**: Style monochrome, gợi suy ngẫm — ví dụ: người nhìn ra cửa sổ, cuốn sổ tay cũ
- **Ảnh 2 (Lời Gửi)**: Style monochrome, ấm áp — ví dụ: bàn viết với ánh đèn, bức thư tay

## 5. Verification Plan

### Browser Test

1. Mở `index.html` bằng live server
2. Kiểm tra: Logo không còn "Architect"
3. Kiểm tra: Nav links hiện đúng 4 mục mới
4. Kiểm tra: Cột 4 hiện 2 cards + social links (không còn form)
5. Kiểm tra responsive trên mobile viewport

### Deploy Test

1. Chạy `vercel --prod`
2. Mở production URL
3. Xác nhận tất cả thay đổi live
