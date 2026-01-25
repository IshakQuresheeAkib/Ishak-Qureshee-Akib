export default function Loading(): React.ReactElement {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-white/70 text-lg">Loading...</p>
      </div>
    </div>
  );
}
