import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Supabase x Remix</h1>
      <h2 className="text-lg text-gray-600 max-w-lg text-center">
        Bare minimum and un-opinionated example using Remix to implement
        Supabase's email/password and social auth.
      </h2>
    </div>
  );
}