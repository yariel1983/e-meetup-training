import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";

function Banner(props){
    return (
        <div>    
            <div>
                <div className="row" id="aboutfeature">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img-top" src="https://yese69.com/wp-content/uploads/data/2018/1/5/top-gym-wallpaper-1920x1080-sma-WTG30514883.jpg" alt="Card image cap"/> &nbsp;
                                <h5 className="card-title">No Rest is Worth...</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="#" className="btn btn-secondary">Go To Top</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img-top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMVFhUWGRgXFxgVFxUYGBcVGBUaHRcXFhgYHSggGRolHRUYIjEhJSkrLi4uFx8zODMtNyktLisBCgoKDg0NFRAPDysZFRkrLTcrKy03LS0tLSsrKysrLS0tKzcrNy0tLSsrLS0rKysrKy0tKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcBAgj/xABBEAABAwIEAwUFBgQFBAMBAAABAAIDBBEFEiExBkFRBxMiYXGBkaGxwRQjMkJS0TNicvAVgpKy8aKz0uE0U8IW/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDDkIQgEIQgFovA4PdNWdLRODatgiaLi6C+yP8ACmklZkGq4KtpG6jMQc0ndBM0taX2DdSU7qWyMbmI0525eq5w3C0MuN/kn+JTNZE9ztg0/JAywyfPmsdt/aCqxiQ+9H9Ef/ban/Adc2Xvw3dpaD7Qf2TLEx94P6I/+2ECmBT5HuPl9VOjEgq3h0d3EeX1T99OglhiTeq9NxFqrVU0jmjCru5oJivqMxsOiyzjxhEzbjkdfb/fvWmCItfdUDtGBL2G21/jZBF8DPtVtPkfotnlxaNjRmOtthqViPDByymQ6NjaSTy8rpWr4omLrsNhfcgOLvW+3oEGsycXUzXZXOcD5tPvHUJSDimle4NEmp2uHAOtvlJFj7FmVPUCuhdGWgTsBc0jn6dL6AjzB9KtHK4aXNr3tcjXr6+aD6CmxqFls0jG32zEAE9ATzSsmIsaAS5oB2JIAPoVhx4jqMpY8h7SLEPF7j917oOJ54md2CHRnTK/xW0tYE7BBujZgV6Kw7CuL6iAFrXZoyf4b7uaB/Jfb0T2j44lY7QZWH8t/wAJv+Q8vTb5oNgkakHBUTCe0hpkayZpDHEAvJHhP6j5dVfXDRAkQk5GpUpOQIEHMCxniiDJVSt5ZiR6OOb6rZ3LK+0WDLV3to5jT8x9EFalJJuea8JZ7fADfr/fySKAQhCAQhCAQhCAQhCAS9LPI0+AkHoP2SCnOF6YOc49LBA/osRq7C7fopamlkLgXXCmaShACQrm2cNEEzhtYWag/smPE2JPeyxOnQbL3TONtkhWxZkDXsie7vKq4Opj/wD3r8vepLFP4jf6Gf7U44NpyyR1ra2v5gX/AHTfGDaRv9DfqgMIP3h9D8wpZwUNg5+9/wAp+YUy5BHV40KRwU2J9U4rtk0wo+IoJ8jVZ52jMd4bba3+Cvhl1CpXF8L5pY4wPC4nMTyaNT8LoKdUO7uFsfOS0j/6fyD6+0JixpJAG50S2IVHeSOdyJ0/pGjR7gF7w2O7r/psfigu+B0/c5DbVtr/AFVT4qoxHUyAfhcc7fR2vwNx7Fc6F1x5WCheO4LthkHmwn4tH+5BUEITirbGMnduJ8IzXFvFzG5229iBuhCEAth7OMY7+lyON3w2YepYR4D8CP8AKseVr7NcR7qsDL+GVpYfXdp94t7UGuuC8EJvLUG6898UCjmqj9pOFF8bZ2i5j0db9B5+w/NXIvKaVUgIIIuCCCOoO4QYldcUjj2G9xM5n5d2H+U7e0bexRyAQhCAQhCAQhCAQhXai4djLWktGoB+CCkgK98GYYQzM4WJN1I0uARj8oVgo6QNCDrItFFYmzxBWAMUPisN3BAlA821KSqZwNyn0FBoobiCnOXQIJzhWoa6Xfpa3W6Sx3SUf0j5lc4IhLXXsNbD2X3XjiD+N/l+T3IPODO++/yn5hTj1XcEkvUWH6HH4t/dWF6BhWnRMcMd4inlcdFE0zyHFBOd8A8f3yUJxdO1kT5PzBrmttyL7C6XjqPGL+fyVf47qB3TWjQufqPJrf3cEFIAT2ncGNIO5bceWhN9tdhomjBy6ka+XNKh4tfawsPPf/yugsIxCSOV7i0tjZlD2XvYOPhfrtpbQdVIcRBslG5w1ylrxb+rKf8AcoacDLI4Zhe7/vNC5mTLl9jpAB/6T7CGk0MrT/8AXIR6NN/ogqK9SNsSF5TmujsWH9TGn4W+iBshCUhZc28jb2C/0QJpxQVHdSxyD8j2u9xBSBC4g3qYC9+W/sUFi+NRw6kgJzgGICopI3jcNDHjo9gAP0PoQs742icJrm+UjToCgvOFcRxS6NcCenP3KSmaCsl4cJ+0Mt539FqkbvCEFR4/pPu2PGuV2U9bOGnxb8VRitO4pa51NLltoA7Xo03NvPosxQCEIQCEIQCEIQC1ygh8DP6W/ILI1tFBF92z+lvyCBaGJPomLzFEnkcaBMRqNrmWeFOZFE4mzxBBK4DhElToywA3c7YHoOptrZPsT7PLi5qGjWw+7cbk8gA65O6svA8YFHHlNi4vJ03IeW/Qe5VxnHxbjRw9z2uYbsFmWyyBmYZnc76jTyQQr8JNHK1j3AEkAEHR3i2B6+W+oTPGuFKmUGphDZGAEFrc2cWlkzaFoBtbUA38tlOdrEZd3ZOXKwlxJk8UcpyZMrARmabO1IOo2srhwjGx9FH4dJWB7yfzukb94dNtb6DlZBheGd4Zmd0RncQwX2Je4NAPlc/BaHW8LVUUJll7rwgF4Y5xsSbWbdovuoHiDh4UWJ0wZcRSTQPZc32lYHtJ5kE+4hafxSQKOo1vtf8A1t008gEVSH8D1Ul8ph0Nj43b2B/T5pmOziubdx7na+kjr/7FqFVViKCWRoBbGwva0C2zL2PTkfas2l7WHFxb3EQzDLmzm/Py132QVOOmIeCdtfkoHHsDnrKiKnp2B8gY59i5rd3Nbu4gb2HtVsfUs0AI2+iW7NH3x23SleP+tp+qIy7EuG6ukaJJ4SxvePiOa34wNW+YLTcOFwRqCmOE0j5aiOONveOc8Na0fmJdovqHtLwF1Rhs8bLySC8sebKSHC5c1u27C9o3tmCyTsBwQS1bqhwzNgGnhJtI7Rhvt+o9btHkga8WcFVracyOpS2xDXOzR6NzaDR1zrZSPB/D0tZngjygMjLJHOJytc9hyg2FyTqbDor12i8Oww0FVUxF2YF0ujiR3j5TmdqdDeV22nlfVOuxiAf4bHKHkvnfI5xsPEWPMd7W00Y3foEFCquwl8bS51ezcAAQvJcSNgA65de4AAN/gqDxtw1PQyRxTAaNIa9pu11nE2HRwDm3adRcdQTsNRx/Vsx/7A57fs4+7HgAOd0Ic15IBJOY5bbWO10x7eYpHU4ORmVjg6QF7bxveIw0xN0c5pDXNJI11IAtoGY4b2eYnOxkkVKSyT8JL4m/lLtQ5wLfCL623HUKRb2XYxEQ91G4gXvkfC87H8rX3PsWvPq2w4VhspqIoG5KUvMh8Tw2JmkZJsXAD8JDrtLrWIBTzss48GKNnzMMckbmkszZxkc2wLCQLC7Dccib31QfOWGYFNUTSRNsx8bHveJczLCMeJpFr5uVrbq6s7D8TIBD6Wx1/iP/APBaNjdBBHxDHIWsDpaNziXNBHesks1+2jsoAzHYNT/tE49kwuCmeIWyvl0fcua1pDAdDbmTt0QZ1hnCVbhJb9qdCYKiQRDu3lxbMWuLDq0aHIW+tkcSYU2Rp0uoHjXtPlxCCGH7PHCIpWygscT4mtcALWAA8ZKcYBjNROC9z43Nt+BujmOv0tsR5oIbAMHfFLdw/wCFdGzi1lW8bxcxHxRvF9nDKR6Xvuq3Pj8hJLXEa6DKPib/AEQXHiyS1LLYE3yjTTdw1Pks1U/W4+6Smcx34nOaNOg1+gUAgEIQgEIQgEIQgFNUWMBrA1zpbjmHu2/1KFV1wPAaWcCzTsL2c7eyCNk4g6STEEW/iSAg9d02puJ6pjrtnlI/me8+zUkJ5xbw+yns6O9uYJupvhDhCnmgEkweXHXwuy6ckCdLxlI8/jLQORk1PmE6bjxc4ESlwzAHxE2JKQxnhWjj1Hef6wfokKDhmB0UkjDJ3jAXMGYWLhqL+HZBu/AuKXpoY2tFgSHF78v4nOcO7FiXHXbTY66LNMMwrLxO6XRrPtElgOron66beI/FWDsZxWWWE3e0NDsjAGi8chbKXCQgAvBaxrgL9NRYKeoeEp48UdVhsfdXLwM1jmfFZzQLH8xJuim3avQsio31T9TG5oYGta0NEs4zuI3c4gtvrrlVn4Qc0YdTPaNDTxG9gCR3YNz7yfaqf28YkGYW6N7bPmkY0a3HgdmOvo34qwcGUrv8NpCZJCw0kV2HuyyxhAIPgzW101O3vCDxTEY8QpKCrgDQ8VFNLI3LctaZhHMLjYB9rl3KNTXHs720Nb42WAbYuOUM+8F8531JsLfp81mPYpxN3Geic7wzlskJdezXggTDQHdgzC+n3Zva91pXaJhpkoKxocW544wHDLZwD72dprqXHT9QURY4ZsneGXK1obnc6/hytaLk35Zba6bOVP4ursLqKWqZFLSulfDla5pjL76load9Cb+V1aMboO/jmp8xvLTuiFwSwZ2Pbc2PXf0HVY4ewWpbciti0BI8DxrbbdFV+iwgxPzOnJa3k7JqLdQVcOy2ib/ihqRI0tMDm5eniYN7rMsY4TqoiBI9jv8AM4/MKw9jtW2ixImZzWtdA/UuDW7tOrjYDRrt+enNVG+VGNsjrKakdoZo5XMdYDM+ItuwDldpc7T9KreI00GB4fWSwOAcXySNzAX72WwijHVrfDpbZpOmpVY7c6mSGXDq6FxPduke25ZYawloGXUtOt9Tuqd2v8ew4iYGU4PdRtzOLmkO703Frk6gA9NyUGm8exzf/wA/IZ3jMI4g5rGtaw3qIbOA/Lo02FxYO1HTnYzjA/w6nhY0ANdIHOe8N1fUPyBn6yQXadWnVPe1ORpwOsDRbJ3bCM2YgtqIwAT1tb3891UuwaolMLm96zIxwDQGAGOSTvSe8cAC9pytIGboNLBBAz5G8WbZWmpb1HidEL7cy4/FX3tnwcf4bUTuI8BaY2sa1oBlnaHl1tXOIcNf5R7Wbez2qbjrcQY2LuQRI4Zsh7wxFpaAAdc1nE7G5T/txrwzCZWPZlfM+NgsQQSyRr7X0vo1x06FBY+GqJkmEU0U3jY+mivcDQGMFtrDdulja+gO6qGHcCtw+oZJFl+zxiaSaS4trbIx3iLvAGh1nFzDdxsDoblwkXf4XS3v/wDEjudBqIm2sFjnYFjbKZ1a6aURwiONzi6+UO7zK0/9dtuYRVgwavqp+IpGzQtj7qldHHFfM3uTlIIIADi4PJ0tuBpZaNLi1HDTxOrHxxtJc1v2gt1LSQbE+Q9xVF4cxinq+IxUU7szH0R1tY5g8DUdbAKa494LditPCxk3d9y9zi6RriTdgzAAHU5r36EEckRl/bRiNBM2h+xOgIa2XOIQ0FoJjyB+Ub6O063WbU1S+N2Zji09QbK78e9mU2GU7J5J45A+QR5WNcLEsc69zuPAVQ0D+fGZ3tLXyFzTuCGn6JGoonMaHEsIP6ZI3nUcw1xI9oTZCDt9Lclxe2HQj2+4LwgEIQgEIQgEIQgFeOzOpaHvYTruPSyo6dYZWGKVkg5HX05oLr2kv0A6kKzcFSNdTNseQVO44rGSRsIdc6JpwfjpiPdE6H8P7IJ3jivY0hpOpPyXnhara69juqrxZUl85vyHzTDDsQfC67D6jkUF+Jmw6V1TQvAvcvieLsPhcLt5hwzOsQQRmNjYkGUo+3WaNjWCihsL3tJJrfnrck31JJJOvqs7rOI5ZBawF9OqhkFj4s4zqMQkMlQGHQhjWghkYNrlovcuOVt3Ek6DlorbhHbRUwU0NOKaFwijbEHF0gLmNaG62OjiBv8ABZehApNLm8gNhroPatkn7Q6eajEYiljIiEYD5i9mjx4yHak2DgNdneQti5CeYkRdgBBtG0G2vi3I+KDVqnt4qA7w0sBA5kyfDVaFgvHMs8Ye6JjSRfQu5jzXy2tt4UxNjoGkEbBA143kuNtlQo8TjpqmOWSnjqA2MeCQuDc1zZ3h3I89NVdOIpBIbBZ1xFGWyNaeTAPc5yCY4y42NbFFCynjp4oi4hkZJbd2W9rjQXbewVTBXEINL4k7V5a6lmpPszWCZ2YFr9gHB1iMgzG7b3uCTZVDhziWehl76mda5sWv8TXAfqGmovuLEXNjqbxVLa5J2sdt/Z8fcvMjbNbfndBq9B25zRMDRRRb3JEkniuNSS65LibEuJJKovGfGdViUgfOWhrb5I2CzG3ABOurnENAuTyVdQg1TDO2qeGljphSxuEcTYsxe65ysy5iANza6pvA3Fj8NqDM2Nkocwscx98pGZrmn1DmAgquoQaPJ2sP+3MrY6OFkjInwloc7K5r3576WsQ4u9cxUs3t6qxtSU49DJ+6yJCC98d9ps+J07YJYIow2QSAsL73DXNtqbWs8qiITvDMPfO8RstmOupsEDRCvFP2cShueaaNo6MBefjYD4qq4zTRxylkZcQNCXW39iBihCEAhCEAhCEAhCEAhCEHSV1jiCCNxqF5Qgu1PhDaqJsjhrZQOJYG9rrMFwrzh+WGmaAeQ+SYzzCxKCu4Dw06aUMc8M0LhfW5HJQM7bOcOhPzWg8GZZatxJ/hsc7y10VCrIi17gRbU8wfPceSBBCEIFGNzFrQNTp7yu1Qs9w/mPzT7h6AvnbbkCT6AW+o96aYiLSyD+Z3zQN1JYPjMkB8Ju07j9lGoQWRvEhdKDbwmw13v7Ey4lmDpQfL6/8AtRcR8Q56j5pxibyZCSLaD5IGiEJWnZc/Q8wOnuQB0b668uiUrdMotazQvbIw99h+EX200JNre9J1182u9kDdCEIBCEIBCE7wmhM80cQNs7gL9BzPuugs3CXCglhdPKPCbiMdbHV/pcWHtTcUzaOoDwfDr7Fpb6NscLI2aNa0NA8gOaoXFMbe7cTvy9b6IH+NcYsMJDTd1rAA8/PyWdPcSSTudSuIQCEIQCEIQCEIQCEIQCEIQCEIQPJcTlc0MLzYbWUzT1B7kE72VaUqJvuR5BBOcBylss7h+nLr5k/slKiCUXaZWltz4WsHPrc+fzTTguF/3j/yge8n+/gpuRmt9L9QgjKjDmO0eXE22Gwt06KKxbD4o23AIPmfoArI1upKrPEkvitf2IJfhUNbBm0GYm50vobAE/3uqxi38aT+o/NWXhs/cAabu39VWsVP30n9R+aBohCEEjgDGmdubYXPqbJxxIwZg4dXN91v3TDC/wCKz1+icVTbtlH6X5vYdCgjV1p1XF0dboJWNrY9Qb3FvaNVGSuuSUoZ/DbmOaQQCEIQCEIQClOGmv8AtDHNH4TqegIIUWrvw9TiKna63iec59Pyj3a+1Bdaqc90sr4kqHGTKb2HxWo4ZH3kdyq3jOHRl1iAUGdIU1jWEtjGZntHQKFQCEIQCEIQCEIQCEIQCUnhcw2cLH6JNL1lSZHXPkB6AIEEIQg64+Vk7w+F0jmxN1JcPcSN0zVp4CpQZHyn8gAHq7/hBZKSgEMYibqBq49SU3qpOQCd1s9h5n5KMDj6oPL5PF7FVsdfeT4qZqqtgcSXj0GvyVbrZQ55I2QTuC37mwNvxWPTVQdf/Ef/AFH5qxYLADC3XcH5lV7EW2leP5igbIVn4MwFs5Lni7RoAdieZTrjLh+KFueMWItcDYhBUGPIII3CeUUnhkvzH7pivbJLAjqgIgTprbc26dU/GF3GcPAZvc9P75KPY4gggkEcxulZ6t7xZziQOXL4IPE5Fzl25fS/mk0IQCEIQCEIQK0rAXtB2vr6K6xz57Nb/wAKiqbwTFWxg5jr16oNFpqtsMNieSh6Q98XPO3JUvFMZklJAJDenX1SuH8QPjZktfoUCnEs5DywHS2qgkrUzl7i525SSAQhCAQhCAQhCAQhCARZC6HHbqgLLiUhlLb22IsR1C9tpXFub8u1+QPQoEFeuE4slPfm85j6bD5fFUqencz8Q32PI+1WrDpHNiYNyWiw5a8ygfVVVmdp7PTzTCSouCAfUphi9df7qPW34yP9oTFmIWFiBp5IHNU1oBs65soVKSSE3815jZcgdSB70Fvw1to2Do0fJVnF/wCM/wBforQywFlXK2K9QR1I91gg0DheMRU7fS59qgMUxlkshjJ028l3GsbDIu7YfERb0HVU1A5xGBrHkNNx/eibIXoMNr2NuqDygIU3wyWB5Lm3PJAxgwmd4u2M289Pmm08DmGzgQfNaTUYm3JoBdUfGcz35igikJQxFc7soPCF6yLmVBxCEoITa/JAmhCEAhexGbXXmyDiEIQCF3KuIBCEIBCEIBCEIOgpeKrLWvYPwu5dPNCECbp3FoaXHKNhfRTcWPFsLWgeJoy+zkVxCCPkxN5FrD3JkShCDic4d+MHpcoQgnG1Kh8RnPekg20A+CEIGbnE6nVcQhApA4BwJ2BF/RWGOojla5jOd/8AlCEFcc2xIPI2Uth7LbIQgdPqtcvNIytuuoQN3QrwYV1CBJ8a8OjQhAk6NdZCTpdcQgV+yLx9nQhA9hptF6fRriECZpV4dToQgSkjTZyEIOIQhB//2Q==" alt="Card image cap"/>  &nbsp;
                                <h5 className="card-title">One More...</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="#" className="btn btn-secondary">Go To Top</a>
                            </div>
                        </div>
                    </div>
                   
                    <div className="container mt-5 mb-5">  
                        <p className="text-center"></p>
                        <div className="row">
                            <aside className="col-sm-4">
                                <p></p>
                    
                                <div className="card-banner  overlay-grad" id="banner1">
                                
                                    <div className="card-body text-white">
                                        <h5 className="card-title">Primary text as title</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div> 
                    
                            </aside>
                            <aside className="col-sm-4">
                                <p></p>
                                <div className="card-banner" id="banner2">
                                    <article className="overlay overlay-cover d-flex align-items-center justify-content-center">
                                        <div className="text-center">
                                            <h5 className="card-title">Primary text as title</h5>
                                            <a href="#" className="btn btn-warning btn-sm"> View more </a>
                                        </div>
                                    </article>
                                </div> 
                    
                            </aside>
                            <aside className="col-sm-4">
                                <p></p>
                                <div className="card-banner align-items-end" id="banner3">
                                    <article className="overlay m-4 w-100">
                                        <h5 className="card-title">Primary text as title</h5>
                                        <a href="#" className="btn btn-warning btn-sm"> View more </a>
                                    </article>
                                </div> 
                    
                            </aside>
                        </div>
                    </div>
                    <article className="bg-secondary mb-3">  
                        <div className="card-body text-center">
                            <h4 className="text-white"></h4>
                            <p className="h5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                            <p><a className="btn btn-warning" target="" href="#">Learn More 
                                <i className="fa fa-window-restore "></i></a></p>
                        </div>
                    </article>                    
                    <div className="container-fluid mt-3 pb-5">
                        <div className="alert alert-default" role="alert">
                            <img className="card-img-top" src="https://wallpapermemory.com/uploads/510/gym-wallpaper-full-hd-1920x1080-301981.jpg" alt="Card image cap"/>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
                
                
                    
                    
            
    
            
            
    
        

            );
}   
    
export default Banner;
                        
              
                            
            
                            
                            
                        
                        