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
    <BaseContentDiv $isLastBottom={$isLastBottom} style={{ padding: "20px 0 0 0" }}>
      <CheckBox name="Coding" onCheckBoxChange={onFilterChange} />
      <CheckBox name="Food" onCheckBoxChange={onFilterChange} />
      <CheckBox name="Gaming" onCheckBoxChange={onFilterChange} />
    </BaseContentDiv>
  );
}
