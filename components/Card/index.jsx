import { Flex, Text } from "@mantine/core";
import { IconBookmarkFilled } from "@tabler/icons-react";
import Image from "next/image";

export const Card = ({ data }) => {
  return (
    <Flex className="relative shadow-lg border w-[135px] h-[135px] md:w-80 md:h-80 flex-col rounded-xl p-3 justify-center items-center gap-2 hover:cursor-pointer hover:scale-105">
      <IconBookmarkFilled className="text-red-600 absolute top-0 right-0 md:w-[90px] md:h-[90px] h-14 w-14 " />
      <p className="absolute md:right-7 md:top-7 right-4 top-4 text-[10px] md:text-base text-white font-semibold">
        -{data.discount}
      </p>
      <Image
        src={data.image}
        alt="shadira"
        className="w-auto md:h-48 h-14 object-contain"
      />
      <Text fw={"bolder"} className="text-[10px] md:text-base text-center">
        {data.name}
      </Text>
    </Flex>
  );
};
