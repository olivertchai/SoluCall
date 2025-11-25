import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Pressable, Text } from "react-native";

import { useModal } from "./ModalProvider";
import styles from "./styles";

type ModalHeaderProps = {
  title?: string;
  withCloseButton?: boolean;
};

export default function ModalHeader({
  title,
  withCloseButton,
}: ModalHeaderProps) {
  const modal = useModal();

  return (
    <>
      {title && <Text style={styles.title}>{title}</Text>}

      {withCloseButton && (
        <Pressable style={styles.close} onPress={modal.hide}>
          <AntDesign name="close" size={18} color="black" />
        </Pressable>
      )}
    </>
  );
}
