
export type ViewType = 'dashboard' | 'agenda' | 'prontuario' | 'marketing' | 'financeiro' | 'teleconsulta' | 'agendamento' | 'configuracoes';

export interface Patient {
  id: string;
  name: string;
  cpf: string;
  birthDate: string; // Formato YYYY-MM-DD
  phone: string;
  lastVisit: string;
  record: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  time: string;
  date: string;
  type: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface AutoMessages {
  birthday: string;
  confirmation: string;
  reminder: string;
}
