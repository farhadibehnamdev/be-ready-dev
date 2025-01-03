import { Icon } from "@iconify-icon/react";
import {
  Modal as ModalNextUI,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";

export const Modal: React.FC = ({ isOpen, onOpenChange, onClose }: any) => {
  return (
    <ModalNextUI
      isOpen={false}
      onOpenChange={onOpenChange}
      placement="top-center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Create Deck
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                endContent={
                  <Icon
                    icon="lucide:folder"
                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                  />
                }
                label="Deck"
                placeholder="Enter your deck name"
                variant="bordered"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onClose}>
                Sign in
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </ModalNextUI>
  );
};
