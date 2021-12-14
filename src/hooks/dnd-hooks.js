import { useContext } from "react";
import { DnDContext } from "../providers/dnd-provider";

const useDnd = () => {
  const { dndState, getRace, getRaceProficiencies, getRaceTraits } = useContext(
    DnDContext
  );

  return { dndState, getRace, getRaceProficiencies, getRaceTraits };
};

export default useDnd;
