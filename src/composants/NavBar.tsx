import Container from "./Container";
import { menuLists } from "../types/fichier";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="container mx-auto px-4 py-8 shadow-sm border border-[#dbe6e0] border-border">
      <Container className="flex justify-between items-center">
        <img src="/img/Logo + Text.png" alt="" width={140} />

        <nav>
          <ul className="flex gap-4">
            {menuLists.map((menu, index) => (
              <li key={index}>
                <Link to={menu.url}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border border-[#dbe6e0] shadow-sm">
            <Heart size={24} />
          </div>
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border border-[#dbe6e0] shadow-sm">
            <Search size={24} />
          </div>
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border border-[#dbe6e0] shadow-sm">
            <ShoppingBag size={24} />
          </div>
          <Button variant="primary" className="ml-4 shadow-lg shadow-slate-100">
            Login
          </Button>
        </div>
      </Container>
    </header>
  );
}
