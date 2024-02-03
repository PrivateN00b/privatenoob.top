import BaseContentDiv from "../../components/ui/BaseContentDiv";
import CheckBox from "../../components/ui/Checkbox";
import BaseProps from "../../utils/interfaces";

export default function Filters({ isLast = false }: BaseProps) {
  return (
    <BaseContentDiv isLast={isLast}>
      <div style={{ margin: "0 0 20px 20px" }}>
        <h2>Meals:</h2>
        <CheckBox name="Breakfast" />
        <CheckBox name="Dinner" />
        <CheckBox name="Lunch" />
        <CheckBox name="Dessert" />
      </div>
      <div style={{ margin: "0 0 20px 20px" }}>
        <h2>Restrictions:</h2>
        <CheckBox name="Vegetarian" />
        <CheckBox name="Vegan" />
      </div>
      <div style={{ margin: "0 0 20px 20px" }}>
        <h2>Cost:</h2>
        <CheckBox name="Cheap" />
        <CheckBox name="Reasonable" />
        <CheckBox name="Expensive" />
      </div>
    </BaseContentDiv>
  );
}
