// Generic Business Portal Store
// Used for pipeline, tasks, and calendar data

export type Temperature = 'hot' | 'warm' | 'cold';
export type LeadSource = 'instagram' | 'tiktok' | 'referral' | 'website' | 'other';
export type ProgramType = 'premium' | 'standard' | '1on1' | 'group' | 'custom';

export interface BusinessLead {
  id: string;
  name: string;
  instagram?: string;
  phone?: string;
  email?: string;
  notes?: string;
  temperature: Temperature;
  dealValue: number;
  programType: ProgramType;
  customProgramName?: string;
  leadSource: LeadSource;
  followUpDate?: string;
  stage: 'new' | 'conversation' | 'booked' | 'offered' | 'won' | 'lost';
  createdAt: string;
  closedAt?: string;
}

const LEADS_KEY = 'biz-portal-leads';

// Default demo leads
const defaultLeads: BusinessLead[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    instagram: '@sarahj',
    phone: '555-123-4567',
    temperature: 'hot',
    notes: 'Very interested in premium package. Ready to move forward.',
    dealValue: 2500,
    programType: 'premium',
    leadSource: 'instagram',
    followUpDate: new Date().toISOString().split('T')[0],
    stage: 'booked',
    createdAt: '2025-12-01',
  },
  {
    id: '2',
    name: 'Mike Chen',
    instagram: '@mikechen',
    email: 'mike@email.com',
    temperature: 'warm',
    notes: 'Interested but comparing options. Follow up next week.',
    dealValue: 1500,
    programType: 'standard',
    leadSource: 'referral',
    followUpDate: '2025-12-10',
    stage: 'conversation',
    createdAt: '2025-11-28',
  },
  {
    id: '3',
    name: 'Emma Wilson',
    phone: '555-987-6543',
    instagram: '@emmaw',
    temperature: 'cold',
    notes: 'Initial inquiry. Needs nurturing.',
    dealValue: 997,
    programType: 'standard',
    leadSource: 'website',
    followUpDate: '2025-12-20',
    stage: 'new',
    createdAt: '2025-11-25',
  },
];

// Get leads from localStorage
export function getLeads(): BusinessLead[] {
  if (typeof window === 'undefined') return defaultLeads;
  const stored = localStorage.getItem(LEADS_KEY);
  if (!stored) return defaultLeads;
  try {
    return JSON.parse(stored);
  } catch {
    return defaultLeads;
  }
}

// Save leads to localStorage
export function saveLeads(leads: BusinessLead[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
  // Dispatch event for other components to update
  window.dispatchEvent(new CustomEvent('biz-leads-updated', { detail: leads }));
}

// Close a lead (won)
export function closeLead(leadId: string) {
  const leads = getLeads();
  const updatedLeads = leads.map(lead => 
    lead.id === leadId 
      ? { ...lead, stage: 'won' as const, closedAt: new Date().toISOString() }
      : lead
  );
  saveLeads(updatedLeads);
  return updatedLeads;
}

// Add a new lead
export function addLead(lead: Omit<BusinessLead, 'id' | 'createdAt'>) {
  const leads = getLeads();
  const newLead: BusinessLead = {
    ...lead,
    id: Date.now().toString(),
    createdAt: new Date().toISOString().split('T')[0],
  };
  const updatedLeads = [newLead, ...leads];
  saveLeads(updatedLeads);
  return updatedLeads;
}

// Update a lead
export function updateLead(leadId: string, updates: Partial<BusinessLead>) {
  const leads = getLeads();
  const updatedLeads = leads.map(lead =>
    lead.id === leadId ? { ...lead, ...updates } : lead
  );
  saveLeads(updatedLeads);
  return updatedLeads;
}

// Delete a lead
export function deleteLead(leadId: string) {
  const leads = getLeads();
  const updatedLeads = leads.filter(lead => lead.id !== leadId);
  saveLeads(updatedLeads);
  return updatedLeads;
}




