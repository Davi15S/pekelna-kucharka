import { Row, Text } from "@app/styled";
import Button from "@components/Button";
import React from "react";
import { ConfirmDialogWraper, Dialog } from "./styled";

function ConfirmDialog({ handleConfirm, handleCancel }: { handleConfirm: () => void; handleCancel: () => void }) {
  return (
    <ConfirmDialogWraper>
      <Dialog>
        <Text fontWeight="700" fontSize="20px">
          Opravdu chcete smazat recept?
        </Text>
        <Row>
          <Button text="Ano" color="red" onClick={handleConfirm} />
          <Button text="Ne" transparent onClick={handleCancel} />
        </Row>
      </Dialog>
    </ConfirmDialogWraper>
  );
}

export default ConfirmDialog;
