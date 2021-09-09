<Window>
  {
    this.state.show ? <Loading show={this.state.show} /> 
    :   
    <View squish='sm'>
      <Illustration height={200} image={require('../assets/images/icon_ame.svg')}/>
      <Input
          inputMode="text"
          type="text"
          label="Nome"
          value={this.state.name}
          border="thin"
          onChange={(value) => this.onchange(value)}
      />
      <Spacing size='lg' />
      <Grid>
      <Button
          label={'Salvar'}
          type='primary'
          onClick={() => this.save()}
      /> 
      <Button
          label={'Listar'}
          type='primary'
          onClick={() => this.findAll()}
      />  
      </Grid>
      <Spacing size='lg' />
      <Paragraph textAlign="center">{this.state.message}</Paragraph> 
      <Spacing size='lg' />
      {this.state.people.map((person, i) => { 
        return <Paragraph textAlign="center" key={`person-${i}`}> { person } </Paragraph>
      })}
    </View>
}
</Window>
