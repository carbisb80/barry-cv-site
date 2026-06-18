// app/jira-game/page.tsx

export const metadata = {
  title: "Website updates",
};

export default function JiraGamePage() {
  return (
    <iframe
      src="/jira-solitaire.html"
      title="Website updates"
      style={{
        width: "100%",
        height: "100vh",
        border: 0,
        display: "block",
      }}
    />
  );
}