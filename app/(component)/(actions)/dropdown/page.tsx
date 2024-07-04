import { Dropdown, DropdownOptions } from "@/components/Actions/Dropdown";

export default function Page() {
  const value: string = "foo";
  const options: DropdownOptions<string>[] = [
    { value: "foo", title: "foo" },
    { value: "bar", title: "bar" },
  ];

  return <Dropdown modelValue={value} options={options}></Dropdown>;
}
