export interface HospitalType {
  [key: number]: string;
  id: number;
  name: string;
  total_score: number;
  score_service_clarity: number;
  score_service_kindness: number;
  score_treatment_explain: number;
  score_treatment_outcome: number;
}

export interface CustomerType {
  id: number;
  profile_image: string;
  nickname: string;
  review_cnt: number;
  liked_cnt: number;
}

export interface ReviewType {
  id: number;
  customer: CustomerType;
  hospital_id: number;
  hospital_name: string;
  doctor_id: number;
  doctor_name: string;
  total_score: number;
  score_service_clarity: number;
  score_service_kindness: number;
  score_treatment_explain: number;
  score_treatment_outcome: number;
  registered_at: string;
  visited_at: string;
  treatment_prices: {
    name: string;
    price: string;
  }[];
  contents: string;
  suggest: boolean;
  liked_cnt: number;
  already_liked: boolean;
}
