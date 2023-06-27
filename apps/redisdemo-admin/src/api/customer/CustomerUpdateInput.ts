import { EventUpdateManyWithoutCustomersInput } from "./EventUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  events?: EventUpdateManyWithoutCustomersInput;
  firstName?: string | null;
  lAstName?: string | null;
};
