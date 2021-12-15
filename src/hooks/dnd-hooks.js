import { useContext } from "react";
import { DnDContext } from "../providers/dnd-provider";

const useDnd = () => {
  const { dndState, getRace, getRaceProficiencies, getRaceTraits, getAllRaces } = useContext(
    DnDContext
  );

  return { dndState, getRace, getRaceProficiencies, getRaceTraits, getAllRaces };
};

export default useDnd;
