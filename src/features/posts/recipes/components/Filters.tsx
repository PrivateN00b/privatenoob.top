import { BaseContentDiv } from "../../../../components/div/BaseContentDiv";
import CheckBox from "../../../../components/checkbox/Checkbox";
import { BaseContentDivProps } from "../../../../utils/interfaces";

interface FiltersProps extends BaseContentDivProps {
  onFilterChange: (
    name: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function Filters({
  $isLastBottom = false,
  onFilterChange,
}: FiltersProps) {
  return (
    <BaseContentDiv $isLastBottom={$isLastBottom}>
      <div style={{ margin: "0 0 20px 20px" }}>
        <h2>Meals:</h2>
        <CheckBox name="Breakfast" onCheckBoxChange={onFilterChange} />
        <CheckBox name="Dinner" onCheckBoxChange={onFilterChange} />
        <CheckBox name="Lunch" onCheckBoxChange={onFilterChange} />
        <CheckBox name="Pastry" onCheckBoxChange={onFilterChange} />
      </div>
      <div style={{ margin: "0 0 20px 20px" }}>
        <h2>Restrictions:</h2>
        <CheckBox name="Vegetarian" onCheckBoxChange={onFilterChange} />
        <CheckBox name="Vegan" onCheckBoxChange={onFilterChange} />
      </div>
      <div style={{ margin: "0 0 20px 20px" }}>
        <h2>Cost:</h2>
        <CheckBox name="Cheap" onCheckBoxChange={onFilterChange} />
        <CheckBox name="Reasonable" onCheckBoxChange={onFilterChange} />
        <CheckBox name="Expensive" onCheckBoxChange={onFilterChange} />
      </div>
    </BaseContentDiv>
  );
}
