<Window>
  <Circle icon={require('../assets/images/icon_ame.svg')}/>
  <Subtitle fontSize="xs" textAlign="center" color="neutralcolor-darkest">Detalhes desta versão</Subtitle>
  <Spacing size="md"/>
  <View>
    <Paragraph textAlign="center">Todas as informações sobre os componentes, as API's de comunicação e outros detalhes você encontra em nosso portal de desenvolvimento.</Paragraph>
    <Spacing size="md"/>
    <Button
    label="Abrir"
    type='primary'
    onClick={this.accessPortal} />
	</View>
</Window>
