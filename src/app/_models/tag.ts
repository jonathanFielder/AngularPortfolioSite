export class Tag {

    // Languages
    static readonly JAVA = new Tag('Java', 'blue');
    static readonly PYTHON = new Tag('Python', 'gold');
    static readonly SQL = new Tag('SQL', 'purple');
    static readonly KOTLIN = new Tag('Kotlin', 'teal');
    static readonly CPP = new Tag('C++', 'darkorange');
    static readonly C = new Tag('C', 'crimson');
    static readonly CSHARP = new Tag('C#', 'mediumvioletred');
    static readonly HTML5 = new Tag('HTML 5', 'orangered');
    static readonly CSS = new Tag('CSS', 'dodgerblue');
    static readonly HASKELL = new Tag('Haskell', 'mediumseagreen');
    static readonly X86_ASSEMBLY = new Tag('X86 Assembly', 'darkslategray');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'yellow');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'cornflowerblue');
    static readonly R = new Tag('R', 'darkgreen');
    static readonly FAUST = new Tag('Faust', 'mediumpurple');
    static readonly MAX_MSP = new Tag('Max MSP', 'darkslateblue');

    // Frameworks and Libraries
    static readonly REACT_NATIVE = new Tag('React Native', 'cyan');
    static readonly NODE_JS = new Tag('Node.js', 'green');
    static readonly BEAUTIFULSOUP = new Tag('BeautifulSoup', 'lightpink');
    static readonly NUMPY = new Tag('NumPy', 'lightcoral');
    static readonly AXIOS = new Tag('Axios', 'slategray');
    static readonly EXPO = new Tag('Expo', 'indigo');
    static readonly HTMLSESSION = new Tag('HTMLSession', 'rosybrown');
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly NGXBOOTSTRAP = new Tag('NGX-Bootstrap', 'olive');

    // Tools
    static readonly MAVEN = new Tag('Maven', 'chocolate');
    static readonly GRADLE = new Tag('Gradle', 'forestgreen');
    static readonly GIT = new Tag('Git', 'darkred');
    static readonly PERFORCE = new Tag('Perforce', 'slateblue');
    static readonly MICROSOFT_SUITE = new Tag('Microsoft Suite', 'deepskyblue');
    static readonly UIPATH = new Tag('UiPath', 'sandybrown');
    static readonly SAP = new Tag('SAP', 'midnightblue');
    static readonly POWER_AUTOMATE = new Tag('Power Automate', 'royalblue');
    static readonly ANDROID_STUDIO = new Tag('Android Studio', 'limegreen');
    static readonly LINUX = new Tag('Linux', 'black');
    static readonly UNIX = new Tag('Unix', 'darkslateblue');
    static readonly WINDOWS = new Tag('Windows', 'lightskyblue');
    static readonly TENSORFLOW = new Tag('TensorFlow', 'darkorange');
    static readonly AZURE_DEVOPS = new Tag('Azure DevOps', 'lightsteelblue');
    static readonly POSTMAN = new Tag('Postman', 'darkgoldenrod');
    static readonly TRELLO = new Tag('Trello', 'steelblue');


    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}