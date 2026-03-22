# Ivy 3 Communications Website

A professional landing and service-based website built for **Ivy 3 Communications**, a strategic advisory firm specializing in communications, advocacy, and reputation management.

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js + Express
- MongoDB (Mongoose)
- Resend (Email delivery)

---

## Project Structure

- frontend/ # React frontend
- backend/ # Express backend

---

## Features

- Multi-page website (Home, About, Services, Contact)
- Service-based conversion flow
- Enquiry form (general contact)
- Service request form (with selected service)
- Email notifications:
  - Admin receives enquiry/service request
  - User receives confirmation email
- MongoDB storage for submissions

---

## User Flow

- **Contact Page**
  → General enquiries

- **Services Page**
  → Click service  
  → Redirect to `/request-service?service=...`  
  → Form auto-selects service  
  → User submits request  

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd ivy3communications