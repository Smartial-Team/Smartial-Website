export type TrainerProfile = {
  _id?: {
    $oid: string;
  };
  google_user_id?: string;
  documentName?: string;
  name: string;
  email?: string;
  photo?: string;
  playerId?: string;
  created_at?: {
    $date: number;
  };
  userType?: string;
  phoneNumber?: string;
  teamDocId?: string;
};
