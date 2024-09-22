import { getMuscleNames } from '../actions/dbRead';
import SelectorClient from './SelectorClient';

export default async function Selector(type) {
  const push = await getMuscleNames("PUSH");
  const pull = await getMuscleNames("PULL");
  const legs = await getMuscleNames("LEGS");
  const core = await getMuscleNames("CORE");

  const arrays = [push, pull, legs, core];
  const names = ["Push", "Pull", "Legs", "Core"];

  return <SelectorClient arrays={arrays} names={names} type={type} />;
}
