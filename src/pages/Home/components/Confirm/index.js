import React from 'react';

import { Dialog, Paragraph, Button } from 'react-native-paper';

export default function Confirm({
  visible, onPressConfirm, onPressCancel, produto,
}) {
  return (
    <Dialog visible={visible} onDismiss={onPressCancel}>
      <Dialog.Title>Deletar</Dialog.Title>
      <Dialog.Content>
        <Paragraph>
          {' '}
          Deseja realmente deletar o produto
          {' '}
          {produto.name}
        </Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={() => onPressConfirm()}> Deletar</Button>
        <Button onPress={() => onPressCancel()}>Cancelar</Button>
      </Dialog.Actions>
    </Dialog>
  );
}
