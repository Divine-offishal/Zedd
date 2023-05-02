export type Item = {
  id: number;
  name: string;
  image: string;
  qty: number;
  price: number;
}


export type State = {
  items: Item[];
}

export type SignInAuth = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type GoogleAuth = {
  handleGoogleAuth: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type GitAuth = {
  handleGitAuth: (e: React.MouseEvent<HTMLButtonElement>) => void;
}