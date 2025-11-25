import { View } from "react-native";

import ModalProvider from "./ModalProvider";
import styles from "./styles";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";

type ModalProps = {
  children: React.ReactNode;
};

export default function Modal({ children }: ModalProps) {
  return <View style={styles.content}>{children}</View>;
}

Modal.Provider = ModalProvider;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
