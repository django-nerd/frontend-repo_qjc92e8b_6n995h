import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Flames.Blue. All rights reserved.</p>
        <p className="inline-flex items-center gap-1 text-sm text-gray-600">
          Crafted with <Heart className="h-4 w-4 text-rose-500" /> for great vibes.
        </p>
      </div>
    </footer>
  );
}
