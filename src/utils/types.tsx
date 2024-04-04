export type Theme = "light" | "dark";

export type User = {
  firstName?: string;
  lastName?: string;
  email: string;
  secondEmail?: string;
  password: string;
  confirmPassword?: string;
  profilePicture?: string;
};

export type MailboxTab = "Personnes" | "Messages";
