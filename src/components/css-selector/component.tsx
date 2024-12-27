import { cn } from "../../lib/cn"
import styles from "./component.module.css"

export function Component() {
  return (
    <div className="flex flex-col gap-10">
      <div className={cn(styles.parent)}>
        <div className={cn(styles.box, styles.child)}>Child</div>
        <div>
          <div className={cn(styles.box, styles.child)}>Grandchild</div>
        </div>
      </div>

      <div className={cn(styles.neighboor)}>
        <div className={cn(styles.box, styles.child)}>Neighboor Child</div>
        <div>
          <div className={cn(styles.box, styles.child)}>Neighboor Grandchild</div>
        </div>
      </div>
    </div>
  )
}