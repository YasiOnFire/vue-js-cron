export default {
  '*': {
    prefix: 'Zawsze',
    suffix: '',
    text: 'Nieokreślony',
    '*': {
      empty: { text: 'każdy {{field.id}}' },
      value: { text: '{{val.text}}' },
      range: { text: '{{start.text}}-{{end.text}}' },
      everyX: { text: 'every {{every.value}}' }
    },
    month: {
      '*': { prefix: 'w' },
      value: { text: '{{val.alt}}' },
      range: { text: '{{start.alt}}-{{end.alt}}' }
    },
    day: {
      '*': { prefix: 'w' }
    },
    dayOfWeek: {
      '*': { prefix: 'w' },
      empty: { text: 'każdego dnia tygodnia' },
      value: { text: '{{val.alt}}' },
      range: { text: '{{start.alt}}-{{end.alt}}' }
    },
    hour: {
      '*': { prefix: 'o' }
    },
    minute: {
      '*': { prefix: ':' }
    }
  },
  minute: {
    text: 'Minuta'
  },
  hour: {
    text: 'Godzina',
    minute: {
      '*': {
        prefix: 'w',
        suffix: 'minucie'
      },
      empty: { text: 'każda' }
    }
  },
  day: {
    text: 'Dzień'
  },
  week: {
    text: 'Tydzień'
  },
  month: {
    text: 'Miesiąc',
    dayOfWeek: {
      '*': { prefix: 'oraz' }
    }
  },
  year: {
    text: 'Rok',
    dayOfWeek: {
      '*': { prefix: 'oraz' }
    }
  }
}
