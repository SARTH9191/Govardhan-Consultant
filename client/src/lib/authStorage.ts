export interface UserRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "client" | "engineer" | "admin";
  passwordHash?: string; // for staff/engineer/admin
  projectId?: string;
  projectName?: string;
  createdAt: string;
}

// Default seeded users for instant login & preview
export const DEFAULT_USERS: UserRecord[] = [
  {
    id: "usr_client_1",
    name: "Sonawane Family",
    email: "sonawane@govardhan.com",
    phone: "9975042346",
    role: "client",
    projectId: "GC-PDP-SONAWANE",
    projectName: "Sonawane Turnkey Residence & Commercial Project",
    createdAt: new Date().toISOString()
  },
  {
    id: "usr_eng_1",
    name: "Er. Govardhan Sonawane",
    email: "govardhan@govardhan.com",
    phone: "9822000000",
    role: "engineer",
    passwordHash: "SiteQC@2026",
    projectId: "ENG-GOVARDHAN-01",
    projectName: "Pandharpur Region Head Engineer",
    createdAt: new Date().toISOString()
  },
  {
    id: "usr_admin_1",
    name: "Admin pandharpur HQ",
    email: "admin@govardhan.com",
    phone: "9975000000",
    role: "admin",
    passwordHash: "Admin@2026",
    projectId: "ADMIN-PANDHARPUR",
    projectName: "Central Command pandharpur",
    createdAt: new Date().toISOString()
  }
];

const STORAGE_KEY = "buildcraft_registered_users_v1";
const SESSION_KEY = "buildcraft_active_session_v1";

export function getStoredUsers(): UserRecord[] {
  if (typeof window === "undefined") return DEFAULT_USERS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
      return DEFAULT_USERS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
      return DEFAULT_USERS;
    }
    return parsed;
  } catch {
    return DEFAULT_USERS;
  }
}

export function saveUser(user: UserRecord): void {
  const users = getStoredUsers();
  const index = users.findIndex(u => u.id === user.id || u.email.toLowerCase() === user.email.toLowerCase() || u.phone === user.phone);
  if (index >= 0) {
    users[index] = { ...users[index], ...user };
  } else {
    users.push(user);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export function registerNewUser(data: {
  name: string;
  phone: string;
  email: string;
  role: "client" | "engineer";
  password?: string;
  projectName?: string;
}): { success: boolean; message: string; user?: UserRecord } {
  const users = getStoredUsers();
  
  // Clean checks
  const phoneClean = data.phone.trim().replace(/\D/g, "");
  const emailClean = data.email.trim().toLowerCase();

  const existingPhone = users.find(u => u.phone.replace(/\D/g, "") === phoneClean);
  if (existingPhone) {
    return { success: false, message: "A user with this mobile number is already registered. Please log in directly." };
  }

  const existingEmail = users.find(u => u.email.toLowerCase() === emailClean);
  if (existingEmail) {
    return { success: false, message: "A user with this email address is already registered." };
  }

  // Generate unique Project ID
  const prefix = data.role === "engineer" ? "ENG-PDP" : "GC-PDP";
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const generatedProjectId = `${prefix}-${randomSuffix}`;

  const newUser: UserRecord = {
    id: `usr_${Date.now()}`,
    name: data.name.trim(),
    email: emailClean,
    phone: data.phone.trim(),
    role: data.role,
    passwordHash: data.password ? data.password.trim() : undefined,
    projectId: generatedProjectId,
    projectName: data.projectName?.trim() || `${data.name.trim()}'s Turnkey Project (Pandharpur)`,
    createdAt: new Date().toISOString()
  };

  saveUser(newUser);
  saveActiveSession(newUser);

  return {
    success: true,
    message: `Account created successfully! Your Project/Staff ID is ${generatedProjectId}`,
    user: newUser
  };
}

export function getActiveSession(): UserRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveActiveSession(user: UserRecord): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function clearActiveSession(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
}
