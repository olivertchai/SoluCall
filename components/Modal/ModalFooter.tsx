import React from "react";
import { Button, View } from "react-native";

import { useModal } from "./ModalProvider";
import styles from "./styles";

type ModalFooterProps = {
  primaryAction?: {
    title: string;
    onPress?: () => void;
  };
  secondaryAction?: {
    title: string;
    onPress?: () => void;
  };
};

export default function ModalFooter({
  primaryAction,
  secondaryAction,
}: ModalFooterProps) {
  const modal = useModal();

  return (
    <View style={styles.footer}>
      {secondaryAction && (
        <Button
          title={secondaryAction.title}
          onPress={() => {
            modal.hide();
            secondaryAction.onPress?.();
          }}
        />
      )}

      {primaryAction && (
        <Button
          title={primaryAction.title}
          onPress={() => {
            modal.hide();
            primaryAction.onPress?.();
          }}
        />
      )}
    </View>
  );
}
