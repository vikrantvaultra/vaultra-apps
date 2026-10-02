import type { RefObject } from "react";
import { costOf, type Action } from "@/lib/game";
import { inr } from "@/lib/format";
import type { Phase, Round } from "./Game";
import DealCard from "./DealCard";
import MuteButton from "./MuteButton";
import css from "./play.module.css";

interface Props {
  round: Round;
  phase: Phase;
  countdown: string | null;
  leaving: "left" | "right" | null;
  muted: boolean;
  onToggleMute: () => void;
  onDecide: (a: Action) => void;
  onNext: () => void;
  dexCount: number;
  barRef: RefObject<HTMLElement | null>;
  secRef: RefObject<HTMLElement | null>;
  cardRef: RefObject<HTMLDivElement | null>;
  walletRef: RefObject<HTMLDivElement | null>;
  stageRef: RefObject<HTMLDivElement | null>;
}

const SEG: Record<string, string> = { loot: "good", dodge: "good", trap: "bad", miss: "meh" };

export default function PlayScreen({ round, phase, countdown, leaving, muted, onToggleMute, onDecide, onNext, dexCount, barRef, secRef, cardRef, walletRef, stageRef }: Props) {
  const card = round.deck[round.idx];
  const pick = phase === "reveal" ? round.picks[round.idx] : undefined;
  const canBuy = costOf(card) <= round.wallet;
  const remaining = round.deck.length - round.idx - 1;
  const live = phase === "deal";

  return (
    <main className={css.play}>
      <header className={css.hud}>
        <div className={css.wallet} ref={walletRef} aria-label={`Wallet ${inr(round.wallet)}`}>
          <span className={css.coin} aria-hidden="true">
            ₹
          </span>
          <b>{inr(round.wallet).slice(1)}</b>
        </div>
        <div className={css.counter}>
          <small>Deal</small>
          <b>
            {String(round.idx + 1).padStart(2, "0")}
            <span>/{round.deck.length}</span>
          </b>
        </div>
        <div className={css.hudRight}>
          {round.streak >= 2 && (
            <span className={css.streak} key={round.streak} aria-label={`Streak ${round.streak}`}>
              🔥{round.streak}
            </span>
          )}
          <MuteButton muted={muted} onToggle={onToggleMute} />
        </div>
      </header>

      <ol className={css.segments} aria-hidden="true">
        {round.deck.map((_, i) => (
          <li key={i} data-s={round.picks[i] ? SEG[round.picks[i].outcome] : i === round.idx ? "now" : undefined} />
        ))}
      </ol>

      <div className={css.stage} ref={stageRef}>
        <div className={css.deck}>
          {remaining > 1 && <div className={`${css.ghost} ${css.ghost2}`} aria-hidden="true" />}
          {remaining > 0 && <div className={`${css.ghost} ${css.ghost1}`} aria-hidden="true" />}
          {countdown ? (
            <div className={css.countdown} key={countdown} aria-live="assertive">
              <span data-final={countdown.length > 2 || undefined}>{countdown}</span>
            </div>
          ) : (
            <DealCard
              key={round.idx}
              card={card}
              dealNo={round.idx + 1}
              total={round.deck.length}
              pick={pick}
              newTrick={pick ? round.newTrick : null}
              dexCount={dexCount}
              leaving={leaving}
              interactive={live}
              canBuy={canBuy}
              onSwipe={dir => onDecide(dir === "right" ? "buy" : "skip")}
              onNext={onNext}
              barRef={barRef}
              secRef={secRef}
              cardRef={cardRef}
            />
          )}
        </div>
      </div>

      <div className={css.dock}>
        {phase === "reveal" ? (
          <button type="button" className={`btn btn-ink ${css.next}`} onClick={onNext}>
            Agla deal <span aria-hidden="true">→</span>
          </button>
        ) : (
          <>
            <button type="button" className={`btn btn-ghost ${css.skip}`} onClick={() => onDecide("skip")} disabled={!live}>
              <span aria-hidden="true">✕</span> Skip
            </button>
            <button type="button" className={`btn btn-lime ${css.buy}`} onClick={() => onDecide("buy")} disabled={!live || !canBuy}>
              {canBuy || !live ? (
                <>
                  <span aria-hidden="true">🛒</span> Buy
                </>
              ) : (
                "Paise kam hain"
              )}
            </button>
          </>
        )}
      </div>
      <p className={css.keys}>Keyboard: ← skip · → buy · Enter agla</p>
    </main>
  );
}
