import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Form = () => {
  return (
    <div>
      <div className="flex flex-col gap-[20px]">
        <Select>
          <SelectTrigger className="w-[550px]">
            <SelectValue placeholder="Select a occuptaion" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Occupation</SelectLabel>
              <SelectItem value="Software Developer">
                Software Developer
              </SelectItem>
              <SelectItem value="UX/UV designer">UX/UV designer</SelectItem>
              <SelectItem value="Web Designer">Web Designer</SelectItem>
              <SelectItem value="Architect">Architect</SelectItem>
              <SelectItem value="Network Administrator">
                Network Administrator
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex gap-[50px]">
          <Input className="w-[250px]" placeholder="Firstname" />
          <Input className="w-[250px]" placeholder="Lastname" />
        </div>
        <div className="flex gap-[50px]">
          <Select>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input className="w-[250px]" placeholder="Phone" />
        </div>
        <div className="flex gap-[50px]">
          <Input className="w-[250px]" placeholder="Social address" />
          <Input className="w-[250px]" placeholder="Age" />
        </div>
        <div>
          <Input className="w-[550px]" placeholder="Address" />
        </div>
      </div>
    </div>
  );
};
