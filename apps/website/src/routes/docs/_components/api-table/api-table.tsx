import { component$ } from '@builder.io/qwik';
import { Popover, PopoverContent, PopoverTrigger } from '@qwik-ui/headless';
type APITableProps = {
  propDescriptors: {
    name: string;
    info: string;
    type: string;
    description: string;
  }[];
};

export const APITable = component$(({ propDescriptors }: APITableProps) => {
  return (
    <div class="overflow-auto">
      <table class="w-full min-w-[540px] border-b border-gray-700 text-left sm:min-w-full divide-y divide-gray-700 ">
        <thead>
          <tr>
            <th class="w-1/6 whitespace-nowrap py-2 font-medium text-sm">Prop</th>
            <td class="w-1/6 whitespace-nowrap py-2 font-medium text-sm">Type</td>
            <td class="w-4/6 whitespace-nowrap py-2 font-medium text-sm">Description</td>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-700">
          {propDescriptors?.map((propDescriptor) => {
            return (
              <tr key={propDescriptor.name}>
                <td class="py-3">
                  <code class="bg-indigo-200 dark:bg-indigo-700 px-2 py-px rounded-md">
                    {propDescriptor.name}
                  </code>
                </td>
                <td class="py-3 pl-2 sm:pl-4">
                  <code class="bg-gray-300 dark:bg-gray-700 px-2 py-px rounded-full max-w-fit">
                    {propDescriptor.type}
                  </code>
                  {propDescriptor.info && (
                    <Popover placement="right-end">
                      <PopoverContent>
                        <div class="bg-gray-300 dark:bg-gray-700 rounded-full shadow border border-gray-700 mb-2 text-md px-4 py-2 sm:w-max">
                          <code>{propDescriptor?.info}</code>
                        </div>
                      </PopoverContent>
                      <PopoverTrigger>
                        <div class="ml-1">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </PopoverTrigger>
                    </Popover>
                  )}
                </td>
                <td class="py-3 prose prose-sm pl-2 sm:pl-4">
                  <p>{propDescriptor.description}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});
