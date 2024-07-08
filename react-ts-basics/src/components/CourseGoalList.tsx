import { type ReactNode } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox.tsx";
type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }
  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="low">
        Too much goals
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <div>
        <ul>
          {goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoal
                id={goal.id}
                title={goal.title}
                onDelete={onDeleteGoal}
              >
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CourseGoalList;
