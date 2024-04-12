import { formatTime } from "@/app/utils";
import { Office } from "../models/responses";
import styles from "./card.module.css";
import { UserIcon } from "@/icons/user-icon";
import { ClockIcon } from "@/icons/clock-icon";

interface Props {
  office: Office;
  onClick: (id:number) => void;
}

export const Card: React.FC<Props> = ({ office, onClick }) => {
  const { lines, name, online, id } = office;

  const waiting = lines.reduce((acc, line) => acc + line.waiting, 0);
  const elapsed =
    lines.reduce((acc, line) => acc + line.elapsed, 0) / lines.length;

  return (
    <article
      className={`${styles.container} ${online ? "" : styles.offline}`}
      onClick={()=>onClick(id)}
    >
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.footer}>
        <div className={styles.containerIconNumber}>
          <UserIcon />  
          <span>{waiting}</span>
        </div>
        <div className={styles.containerIconNumber}>
          <ClockIcon />
          <span>{formatTime(elapsed)}</span>
        </div>
      </div>
    </article>
  );
};
