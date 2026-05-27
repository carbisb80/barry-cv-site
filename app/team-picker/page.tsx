"use client";

import { useEffect, useMemo, useState } from "react";


const defaultTeams = [
  "Arsenal | Premier League | 84",
  "Aston Villa | Premier League | 82",
  "Bournemouth | Premier League | 78",
  "Brentford | Premier League | 78",
  "Brighton | Premier League | 80",
  "Burnley | Premier League | 75",
  "Chelsea | Premier League | 83",
  "Crystal Palace | Premier League | 78",
  "Everton | Premier League | 78",
  "Fulham | Premier League | 78",
  "Leeds United | Premier League | 77",
  "Liverpool | Premier League | 85",
  "Manchester City | Premier League | 86",
  "Manchester United | Premier League | 82",
  "Newcastle United | Premier League | 82",
  "Nottingham Forest | Premier League | 78",
  "Sunderland | Premier League | 74",
  "Tottenham Hotspur | Premier League | 82",
  "West Ham United | Premier League | 80",
  "Wolves | Premier League | 77",
  "Leicester City | EFL Championship | 77",
  "Southampton | EFL Championship | 77",
  "Ipswich Town | EFL Championship | 75",
  "Sheffield United | EFL Championship | 75",
  "Coventry City | EFL Championship | 74",
  "Middlesbrough | EFL Championship | 74",
  "Norwich City | EFL Championship | 74",
  "Watford | EFL Championship | 74",
  "West Brom | EFL Championship | 74",
  "Real Madrid | LaLiga | 86",
  "Barcelona | LaLiga | 85",
  "Atletico Madrid | LaLiga | 84",
  "Athletic Club | LaLiga | 82",
  "Villarreal | LaLiga | 82",
  "Real Sociedad | LaLiga | 82",
  "Real Betis | LaLiga | 80",
  "Valencia | LaLiga | 80",
  "Sevilla | LaLiga | 80",
  "Bayern Munich | Bundesliga | 85",
  "Bayer Leverkusen | Bundesliga | 84",
  "Borussia Dortmund | Bundesliga | 83",
  "RB Leipzig | Bundesliga | 82",
  "Eintracht Frankfurt | Bundesliga | 81",
  "Stuttgart | Bundesliga | 81",
  "PSG | Ligue 1 | 85",
  "Marseille | Ligue 1 | 82",
  "Monaco | Ligue 1 | 82",
  "Lyon | Ligue 1 | 81",
  "Lille | Ligue 1 | 81",
  "Inter Miami | MLS | 82",
  "LA Galaxy | MLS | 80",
  "LAFC | MLS | 80",
  "Seattle Sounders | MLS | 79",
  "Philadelphia Union | MLS | 79",
  "Benfica | Liga Portugal | 82",
  "Porto | Liga Portugal | 82",
  "Sporting CP | Liga Portugal | 82",
  "Braga | Liga Portugal | 79",
  "Club Brugge | Belgium Pro League | 80",
  "Anderlecht | Belgium Pro League | 79",
  "Antwerp | Belgium Pro League | 79",
  "Genk | Belgium Pro League | 79",
  "Ajax | Eredivisie | 81",
  "PSV | Eredivisie | 82",
  "Feyenoord | Eredivisie | 81",
  "AZ Alkmaar | Eredivisie | 79",
  "Copenhagen | Danish Superliga | 78",
  "Midtjylland | Danish Superliga | 78",
  "Br�ndby | Danish Superliga | 76",
  "Celtic | Scottish Premiership | 76",
  "Rangers | Scottish Premiership | 76",
  "Aberdeen | Scottish Premiership | 72",
  "Hearts | Scottish Premiership | 70",
  "AFC Richmond | Special Clubs | 78",
];

function parseTeamLine(line: string) {
  const parts = line.split("|").map((part) => part.trim());
  return {
    name: parts[0] || "Unknown Team",
    league: parts[1] || "Custom Team",
    rating: Number(parts[2]) || 75,
  };
}

function getTeamsFromText(text: string) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map(parseTeamLine);
}

function randomItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function pickTwoDifferent<T extends { name: string }>(teams: T[]) {
  if (teams.length < 2) return null;
  const first = randomItem(teams);
  let second = randomItem(teams);
  while (second.name === first.name && teams.length > 1) {
    second = randomItem(teams);
  }
  return [first, second] as [T, T];
}

export default function TeamPickerPage() {
  const [teamList, setTeamList] = useState(defaultTeams.join("\n"));
  const [barryTeam, setBarryTeam] = useState<{ name: string; league: string; rating: number } | null>(null);
  const [alanaTeam, setAlanaTeam] = useState<{ name: string; league: string; rating: number } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("ea26Teams");
    if (saved) {
      setTeamList(saved);
    }
  }, []);

  const teams = useMemo(() => getTeamsFromText(teamList), [teamList]);

  function pickTeams() {
    const picked = pickTwoDifferent(teams);
    if (!picked) return;
    setBarryTeam(picked[0]);
    setAlanaTeam(picked[1]);
  }

  function pickFairMatch() {
    if (teams.length < 2) return;
    let attempts = 0;
    let picked = pickTwoDifferent(teams);
    while (picked && Math.abs(picked[0].rating - picked[1].rating) > 1 && attempts < 500) {
      picked = pickTwoDifferent(teams);
      attempts += 1;
    }
    if (!picked) return;
    setBarryTeam(picked[0]);
    setAlanaTeam(picked[1]);
  }

  function swapTeams() {
    if (!barryTeam || !alanaTeam) return;
    setBarryTeam(alanaTeam);
    setAlanaTeam(barryTeam);
  }

  function resetTeams() {
    setBarryTeam(null);
    setAlanaTeam(null);
  }

  function saveTeams() {
    localStorage.setItem("ea26Teams", teamList);
    alert("Team list saved on this device.");
  }

  return (
    <main className="team-picker-shell">
      <section className="team-picker-card">
        <header className="header">
          <h1>EA26 Team Picker</h1>
          <p className="subtitle">Randomly choose one team each for Barry and Alana.</p>
        </header>

        <div className="panel">
          <div className="teams">
            <article className="team-card">
              <div className="player">Barry</div>
              <div className="chosen-team">{barryTeam ? barryTeam.name : "Tap Pick Teams"}</div>
              <div className="league">{barryTeam ? `${barryTeam.league} � Rating ${barryTeam.rating}` : "Ready"}</div>
            </article>
            <article className="team-card">
              <div className="player">Alana</div>
              <div className="chosen-team">{alanaTeam ? alanaTeam.name : "Tap Pick Teams"}</div>
              <div className="league">{alanaTeam ? `${alanaTeam.league} � Rating ${alanaTeam.rating}` : "Ready"}</div>
            </article>
          </div>

          <div className="controls">
            <button onClick={pickTeams}>?? Pick Teams</button>
            <button className="secondary" onClick={pickFairMatch}>?? Fair Match</button>
          </div>

          <div className="small-controls">
            <button className="secondary" onClick={swapTeams}>Swap Teams</button>
            <button className="secondary" onClick={resetTeams}>Reset</button>
            <button className="secondary" onClick={saveTeams}>Save Team List</button>
          </div>

          <details>
            <summary>Edit team list</summary>
            <p className="hint">
              One team per line. Optional format: <strong>Team Name | League | Rating</strong>.
              Fair Match tries to pick teams within 1 rating point of each other.
            </p>
            <textarea
              value={teamList}
              onChange={(event) => setTeamList(event.target.value)}
            />
          </details>
        </div>
      </section>

      <style jsx>{`
        .team-picker-shell {
          min-height: 100vh;
          padding: 24px;
          background: radial-gradient(circle at top, #10284a, #07111f);
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .team-picker-card {
          width: 100%;
          max-width: 960px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 28px;
          padding: 24px;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
        }

        .header {
          text-align: center;
          margin-bottom: 24px;
        }

        h1 {
          font-size: clamp(2rem, 5vw, 4rem);
          margin: 0 0 12px;
        }

        .subtitle {
          margin: 0;
          color: #b8c6d9;
          line-height: 1.5;
          font-size: 1.05rem;
        }

        .panel {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          padding: 22px;
          backdrop-filter: blur(18px);
        }

        .teams {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 18px;
        }

        .team-card {
          border-radius: 24px;
          padding: 24px;
          background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.06));
          border: 1px solid rgba(255,255,255,0.14);
          position: relative;
          overflow: hidden;
        }

        .team-card::after {
          content: "";
          position: absolute;
          width: 130px;
          height: 130px;
          right: -40px;
          top: -40px;
          background: rgba(244, 197, 66, 0.14);
          border-radius: 50%;
        }

        .player {
          color: #b8c6d9;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .chosen-team {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 900;
          line-height: 1.05;
          margin-bottom: 10px;
          word-break: break-word;
        }

        .league {
          color: #f4c542;
          font-weight: 700;
        }

        .controls,
        .small-controls {
          display: grid;
          gap: 12px;
          margin-bottom: 14px;
        }

        .controls {
          grid-template-columns: 1fr 1fr;
        }

        .small-controls {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        button {
          border: 0;
          border-radius: 18px;
          padding: 16px 18px;
          font-weight: 900;
          font-size: 1rem;
          cursor: pointer;
          color: #06101f;
          background: linear-gradient(135deg, #f4c542, #ffe58a);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.22);
          transition: transform 0.12s ease, filter 0.12s ease;
        }

        button:hover {
          filter: brightness(1.04);
        }

        button:active {
          transform: scale(0.98);
        }

        .secondary {
          background: rgba(255,255,255,0.12);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.18);
        }

        details {
          background: rgba(0,0,0,0.22);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 16px;
        }

        summary {
          cursor: pointer;
          font-weight: 800;
          color: #f4c542;
          margin-bottom: 8px;
          outline: none;
        }

        .hint {
          color: #b8c6d9;
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0 0 10px;
        }

        textarea {
          width: 100%;
          min-height: 220px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(0,0,0,0.3);
          color: #fff;
          padding: 14px;
          font-size: 0.95rem;
          resize: vertical;
        }

        @media (max-width: 760px) {
          .teams,
          .controls,
          .small-controls {
            grid-template-columns: 1fr;
          }

          .team-picker-card {
            padding: 18px;
          }
        }
      `}</style>
    </main>
  );
}
