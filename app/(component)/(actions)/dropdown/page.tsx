'use client'

import { Dropdown, DropdownOptions } from "@/components/Actions/Dropdown";
import { useCallback, useState } from "react";

export default function Page() {
  const options: DropdownOptions<string>[] = [
    { value: "foo", title: "foo" },
    { value: "bar", title: "bar" },
    { value: "bar1", title: "bar1" },
    { value: "bar2", title: "bar2" },
    { value: "bar3", title: "bar3" },
    { value: "bar4", title: "bar4" },
    { value: "bar5", title: "bar5" },
    { value: "bar6", title: "bar6" },
    { value: "bar7", title: "bar7" },
    { value: "bar8", title: "bar8" },
    { value: "bar9", title: "bar9" },
    { value: "bar10", title: "bar10" },
    { value: "bar11", title: "bar11" },
    { value: "bar12", title: "bar12" },
    { value: "bar13", title: "bar13" },
  ];

  const [value, setValue] = useState<string | null>("foo");

  const handleChangeDropdown = useCallback((newValue: string | null) => {
    setValue(newValue);
  }, [])

  return (
    <>
      <Dropdown modelValue={value} options={options} label="Age" onChange={(value) => handleChangeDropdown(value)}></Dropdown>
    </>
  )
}
