import React, { useState } from "react";

/* ──────────────────────────── Icons ──────────────────────────── */

const LogoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect width="36" height="36" rx="10" fill="url(#logoGradL)" />
    <path d="M10 5H18.44C21.22 5 23.35 5.57 24.85 6.71C26.34 7.85 27.09 9.47 27.09 11.57C27.09 12.74 26.83 13.75 26.32 14.62C25.81 15.49 25 16.27 23.9 16.96V17.03C25.35 17.68 26.39 18.5 27.02 19.49C27.67 20.48 28 21.74 28 23.27C28 25.75 27.3 27.66 25.9 28.99C24.52 30.33 22.56 31 20.02 31H10V5ZM18.75 15.18C19.57 15.18 20.21 14.92 20.68 14.4C21.17 13.85 21.42 13.13 21.42 12.24C21.42 10.46 20.31 9.57 18.09 9.57H15.64V15.18H18.75ZM19.49 26.43C20.4 26.43 21.11 26.11 21.63 25.47C22.16 24.82 22.43 23.96 22.43 22.87C22.43 21.68 22.12 20.82 21.49 20.3C20.86 19.76 19.83 19.49 18.4 19.49H15.64V26.43H19.49Z" fill="white" />
    <defs>
      <linearGradient id="logoGradL" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#21BDFF" /><stop offset="1" stopColor="#0485F7" />
      </linearGradient>
    </defs>
  </svg>
);

const GlobeIconDark = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.67" stroke="#18181B" strokeWidth="1.5" />
    <path d="M8 1.33C6.29 3.13 5.33 5.52 5.33 8C5.33 10.48 6.29 12.87 8 14.67C9.71 12.87 10.67 10.48 10.67 8C10.67 5.52 9.71 3.13 8 1.33Z" stroke="#18181B" strokeWidth="1.5" />
    <path d="M1.33 8H14.67" stroke="#18181B" strokeWidth="1.5" />
  </svg>
);

const ChevronDownDark = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 6L8 10L12 6" stroke="#18181B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HelpIconDark = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.67" stroke="#18181B" strokeWidth="1.5" />
    <path d="M6.06 6C6.22 5.55 6.53 5.18 6.93 4.94C7.34 4.7 7.82 4.61 8.28 4.69C8.75 4.77 9.17 5.01 9.48 5.38C9.78 5.74 9.95 6.2 9.95 6.67C9.95 8 7.95 8.67 7.95 8.67" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8" cy="11.33" r="0.5" fill="#18181B" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M8.82 8.82C8.51 9.13 8.33 9.56 8.33 10C8.33 10.92 9.08 11.67 10 11.67C10.44 11.67 10.87 11.49 11.18 11.18M14.95 14.95C13.53 16.02 11.79 16.61 10 16.67C4.17 16.67 1.67 10 1.67 10C2.7 8.07 4.15 6.38 5.88 5.05L14.95 14.95ZM8.25 3.53C8.83 3.4 9.41 3.33 10 3.33C15.83 3.33 18.33 10 18.33 10C17.83 10.95 17.23 11.84 16.53 12.66L8.25 3.53Z" stroke="#A8B9CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1.67 1.67L18.33 18.33" stroke="#A8B9CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" stroke="#A8B9CA" strokeWidth="1.2" />
    <path d="M8 11V8M8 5.5V5" stroke="#A8B9CA" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ──────────────────────────── Header (Secondary) ──────────────────────────── */

function LoginHeader() {
  return (
    <div style={h.header}>
      <div style={h.inner}>
        <a href="/" style={h.logo}>
          <LogoIcon />
          <span style={h.logoText}>BRIGHTIFY</span>
        </a>
        <div style={h.right}>
          <button style={h.menuBtn}>
            <GlobeIconDark />
            <span>ภาษาไทย</span>
            <ChevronDownDark />
          </button>
          <div style={h.divider} />
          <button style={h.menuBtn}>
            <HelpIconDark />
            <span>ช่วยเหลือ</span>
            <ChevronDownDark />
          </button>
        </div>
      </div>
    </div>
  );
}

const h = {
  header: {
    width: "100%",
    height: 72,
    backgroundColor: "#FFFFFF",
    position: "sticky",
    top: 0,
    zIndex: 100,
    flexShrink: 0,
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 1200,
    margin: "0 auto",
    paddingTop: 18,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    textDecoration: "none",
    width: 220,
  },
  logoText: {
    fontFamily: "'Sarabun', sans-serif",
    fontWeight: 500,
    fontSize: 24,
    lineHeight: "16.8px",
    color: "#0485F7",
  },
  right: {
    display: "flex",
    gap: 16,
    alignItems: "center",
  },
  menuBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Sarabun', sans-serif",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "18px",
    color: "#18181B",
  },
  divider: {
    width: 0,
    height: 18.5,
    borderLeft: "2px solid #A8B9CA",
  },
};

/* ──────────────────────────── Process Login Steps ──────────────────────────── */

/* Step 1: Login */
function StepLogin({ onSwitch }) {
  const [showPass, setShowPass] = useState(false);
  return (
    <div style={s.card}>
      <div style={s.formSection}>
        <div style={s.titleSection}>
          <h1 style={s.title}>เข้าสู่ระบบ</h1>
          <div style={s.titleLine} />
        </div>
        <div style={s.inputGroup}>
          <div style={s.inputBox}>
            <input type="tel" placeholder="หมายเลขโทรศัพท์" style={s.input} />
          </div>
          <div style={s.inputBox}>
            <input
              type={showPass ? "text" : "password"}
              placeholder="รหัสผ่าน"
              style={s.input}
            />
            <button style={s.eyeBtn} onClick={() => setShowPass(!showPass)}>
              <EyeOffIcon />
            </button>
          </div>
          <button style={s.btnPrimary}>เข้าสู่ระบบ</button>
        </div>
        <div style={s.orRow}>
          <div style={s.orLine} />
          <span style={s.orText}>หรือ</span>
          <div style={s.orLine} />
        </div>
        <div style={s.socialRow}>
          <button style={s.socialBtn}>
            <img src="/facebook-logo.svg" alt="Facebook" width={24} height={24} style={{ borderRadius: "50%" }} />
            <span>Facebook</span>
          </button>
          <button style={s.socialBtn}>
            <img src="/google-logo.svg" alt="Google" width={24} height={24} />
            <span>Google</span>
          </button>
        </div>
      </div>
      <p style={s.terms}>
        การเปิดบัญชี Brightify ท่านรับทราบและตกลงตาม
        <br />
        <span style={s.link}>เงื่อนไขการให้บริการ</span> และ{" "}
        <span style={s.link}>นโยบายความคุ้มครองข้อมูลส่วนบุคคล</span>
      </p>
      <div style={s.bottomRow}>
        <span style={s.bottomText}>พึ่งเคยรู้จักเราใช่ไหม</span>
        <span style={s.bottomLink} onClick={() => onSwitch("signin")}>
          สมัครเลย!!
        </span>
      </div>
    </div>
  );
}

/* Step 2: Sign in (Register) */
function StepSignIn({ onSwitch }) {
  return (
    <div style={s.card}>
      <div style={s.formSection}>
        <div style={s.titleSection}>
          <h1 style={s.title}>สมัครเข้าใช้งาน</h1>
          <div style={s.titleLine} />
        </div>
        <div style={s.inputGroup}>
          <div style={s.inputBox}>
            <input type="tel" placeholder="หมายเลขโทรศัพท์" style={s.input} />
          </div>
          <button style={s.btnPrimary} onClick={() => onSwitch("otp")}>
            สมัคร
          </button>
        </div>
        <div style={s.orRow}>
          <div style={s.orLine} />
          <span style={s.orText}>หรือ</span>
          <div style={s.orLine} />
        </div>
        <div style={s.socialRow}>
          <button style={s.socialBtn}>
            <img src="/facebook-logo.svg" alt="Facebook" width={24} height={24} style={{ borderRadius: "50%" }} />
            <span>Facebook</span>
          </button>
          <button style={s.socialBtn}>
            <img src="/google-logo.svg" alt="Google" width={24} height={24} />
            <span>Google</span>
          </button>
        </div>
      </div>
      <p style={s.terms}>
        การเปิดบัญชี Brightify ท่านรับทราบและตกลงตาม
        <br />
        <span style={s.link}>เงื่อนไขการให้บริการ</span> และ{" "}
        <span style={s.link}>นโยบายความคุ้มครองข้อมูลส่วนบุคคล</span>
      </p>
      <div style={s.bottomRow}>
        <span style={s.bottomText}>หากมีบัญชีอยู่แล้ว คุณสามารถ</span>
        <span style={s.bottomLink} onClick={() => onSwitch("login")}>
          เข้าสู่ระบบ
        </span>
      </div>
    </div>
  );
}

/* Step 3: OTP */
function StepOTP({ onSwitch }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const handleOtp = (idx, val) => {
    if (val.length > 1) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 5) {
      document.getElementById(`otp-${idx + 1}`)?.focus();
    }
  };
  return (
    <div style={s.card}>
      <div style={{ ...s.formSection, gap: 32 }}>
        <div style={s.titleSection}>
          <h1 style={s.title}>ยืนยันรหัส OTP</h1>
          <div style={s.titleLine} />
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={s.otpDesc}>รหัส OTP จะถูกส่งไปยัง SMS ที่หมายเลข</p>
          <p style={s.otpPhone}>(+66) 93 695 5932</p>
        </div>
        <div style={s.otpRow}>
          {otp.map((v, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              maxLength={1}
              value={v}
              onChange={(e) => handleOtp(i, e.target.value)}
              style={s.otpInput}
            />
          ))}
        </div>
        <div style={s.btnStack}>
          <button style={s.btnPrimary} onClick={() => onSwitch("setpassword")}>
            ยืนยัน
          </button>
          <button style={s.btnOutline} onClick={() => onSwitch("signin")}>
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
}

/* Step 4: Set Password */
function StepSetPassword({ onSwitch }) {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <div style={s.card}>
      <div style={{ ...s.formSection, gap: 32 }}>
        <div style={s.titleSection}>
          <h1 style={s.title}>ตั้งรหัสผ่าน</h1>
          <div style={s.titleLine} />
        </div>
        <div style={s.inputGroup}>
          <div style={s.inputBox}>
            <input
              type={show1 ? "text" : "password"}
              placeholder="ตั้งรหัสผ่าน"
              style={s.input}
            />
            <button style={s.eyeBtn} onClick={() => setShow1(!show1)}>
              <EyeOffIcon />
            </button>
          </div>
          <div style={s.inputBox}>
            <input
              type={show2 ? "text" : "password"}
              placeholder="ยืนยันรหัสผ่าน"
              style={s.input}
            />
            <button style={s.eyeBtn} onClick={() => setShow2(!show2)}>
              <EyeOffIcon />
            </button>
          </div>
        </div>
        <div style={s.hintRow}>
          <InfoIcon />
          <span style={s.hintText}>ระบุรหัสผ่านอย่างน้อย 8 ตัว</span>
        </div>
        <div style={s.btnStack}>
          <button style={s.btnPrimary} onClick={() => onSwitch("login")}>
            บันทึก
          </button>
          <button style={s.btnOutline} onClick={() => onSwitch("otp")}>
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────── Main Login Page ──────────────────────────── */

export default function LoginPage() {
  const [step, setStep] = useState("login");

  return (
    <div style={s.page}>
      <LoginHeader />
      <div style={s.body}>
        {step === "login" && <StepLogin onSwitch={setStep} />}
        {step === "signin" && <StepSignIn onSwitch={setStep} />}
        {step === "otp" && <StepOTP onSwitch={setStep} />}
        {step === "setpassword" && <StepSetPassword onSwitch={setStep} />}
      </div>
    </div>
  );
}

/* ──────────────────────────── Styles ──────────────────────────── */

const s = {
  page: {
    width: "100%",
    minHeight: "100vh",
    fontFamily: "'Sarabun', sans-serif",
    display: "flex",
    flexDirection: "column",
    backgroundImage: "url(/BG_login.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },
  body: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    padding: "0 120px",
  },

  /* Card */
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 32,
    padding: "0 40px 0px",
    width: 434,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    boxSizing: "border-box",
  },

  /* Form */
  formSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    alignSelf: "stretch",
    gap: 32,
  },
  titleSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 24,
    paddingTop: 24,
  },
  title: {
    fontFamily: "'Sarabun', sans-serif",
    fontWeight: 700,
    fontSize: 20,
    lineHeight: "16.8px",
    color: "#18181B",
    textAlign: "center",
    margin: 0,
  },
  titleLine: {
    width: "434px",
    height: 0,
    borderBottom: "1px solid #E0E0E0",
  },

  /* Inputs */
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },
  inputBox: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    border: "1px solid #A8B9CA",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    fontFamily: "'Sarabun', sans-serif",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "24px",
    color: "#18181B",
    backgroundColor: "transparent",
  },
  eyeBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    display: "flex",
    alignItems: "center",
  },

  /* Buttons */
  btnPrimary: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    padding: "8px 16px",
    backgroundColor: "#0485F7",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    fontFamily: "'Sarabun', sans-serif",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: "24px",
    color: "#FFFFFF",
    width: "100%",
    boxSizing: "border-box",
  },
  btnOutline: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    padding: "8px 16px",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    border: "1px solid #A8B9CA",
    cursor: "pointer",
    fontFamily: "'Sarabun', sans-serif",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: "24px",
    color: "#18181B",
    width: "100%",
    boxSizing: "border-box",
  },
  btnStack: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
    paddingBottom: 40,
  },

  /* Or divider */
  orRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  orLine: {
    flex: 1,
    height: 1,
    borderBottom: "1px solid #E0E0E0",
    borderRadius: 8,
  },
  orText: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: "24px",
    color: "#798AA3",
  },

  /* Social buttons */
  socialRow: {
    display: "flex",
    gap: 12,
  },
  socialBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    flex: 1,
    border: "1px solid #A8B9CA",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    fontFamily: "'Sarabun', sans-serif",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: "24px",
    color: "#18181B",
  },
  socialIcon: {
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  /* Terms & bottom */
  terms: {
    fontFamily: "'Sarabun', sans-serif",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: "24px",
    letterSpacing: "-0.01em",
    color: "#798AA3",
    textAlign: "center",
    margin: 0,
  },
  link: {
    color: "#0485F7",
    cursor: "pointer",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingBottom: 24,
  },
  bottomText: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "18.2px",
    color: "#0A0A0A",
  },
  bottomLink: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "18.2px",
    color: "#0485F7",
    cursor: "pointer",
  },

  /* OTP */
  otpDesc: {
    fontWeight: 400,
    fontSize: 14,
    color: "#798AA3",
    margin: 0
    ,
  },
  otpPhone: {
    fontWeight: 700,
    fontSize: 18,
    color: "#18181B",
    margin: "8px 0 0",
  },
  otpRow: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    padding: "32px",
  },
  otpInput: {
    width: 40,
    height: 40,
    border: "1px solid #A8B9CA",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
    fontFamily: "'Sarabun', sans-serif",
    color: "#18181B",
    outline: "none",
    backgroundColor: "#FFFFFF",
    paddingBottom: "0px",
  },

  /* Hint */
  hintRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    paddingBottom: "24px",
    
  },
  hintText: {
    fontWeight: 400,
    fontSize: 12,
    color: "#798AA3",
  },
};
